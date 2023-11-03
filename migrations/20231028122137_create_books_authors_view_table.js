exports.up = function (knex) {
    return knex.schema.raw(`
    CREATE VIEW book_author_info AS
    SELECT
        b.title AS book_title,
        a.name AS author_name
    FROM books_authors AS ba
    JOIN books AS b ON ba.book_id = b.id
    JOIN authors AS a ON ba.author_id = a.id;
    `);
};

exports.down = function (knex) {
    return knex.schema.raw('DROP VIEW IF EXISTS book_author_info');
};
