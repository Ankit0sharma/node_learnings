exports.up = function (knex) {
    return knex.schema.raw(`
      CREATE OR REPLACE FUNCTION before_user_insert_func() RETURNS TRIGGER AS $$
      BEGIN
        NEW.password = MD5(NEW.password);
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
  
      CREATE TRIGGER before_user_insert
      BEFORE INSERT ON users
      FOR EACH ROW
      EXECUTE FUNCTION before_user_insert_func();
    `)
    .raw(`
      CREATE OR REPLACE FUNCTION after_user_insert_func() RETURNS TRIGGER AS $$
      BEGIN
        INSERT INTO user_audit (user_id, action, created_at)
        VALUES (NEW.id, 'insert', NOW());
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
  
      CREATE TRIGGER after_user_insert
      AFTER INSERT ON users
      FOR EACH ROW
      EXECUTE FUNCTION after_user_insert_func();
    `);
  };
  
  exports.down = function (knex) {
    return knex.schema.raw('DROP TRIGGER before_user_insert ON users')
      .raw('DROP TRIGGER after_user_insert ON users')
      .raw('DROP FUNCTION before_user_insert_func()')
      .raw('DROP FUNCTION after_user_insert_func()');
  };
  