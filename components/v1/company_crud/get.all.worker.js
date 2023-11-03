const moment = require("moment")

const Worker = require("../../../models/worker");

//TODO Example URl = http://localhost:3000/api/v1/company/worker_info?currentDate=2023-11-02&isWeek=true

module.exports = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = (page - 1) * limit;

    const { currentDate, isMonth, isYear, isWeek, from, to } = req.query;
    let query = Worker.query();

    //TODO get added employee from date range
    if (currentDate) {
      const startOfDay = moment(currentDate).startOf('day').format('YYYY-MM-DD HH:mm:ss');
      const endOfDay = moment(currentDate).endOf('day').format('YYYY-MM-DD HH:mm:ss');
      if (isMonth === "true") {
        const startOfMonth = moment(currentDate).startOf('month').format('YYYY-MM-DD HH:mm:ss');
        const endOfMonth = moment(currentDate).endOf('month').format('YYYY-MM-DD HH:mm:ss');
        query = query.whereBetween('created_at', [startOfMonth, endOfMonth]);
      } else if (isYear === "true") {
        const startOfYear = moment(currentDate).startOf('year').format('YYYY-MM-DD HH:mm:ss');
        const endOfYear = moment(currentDate).endOf('year').format('YYYY-MM-DD HH:mm:ss');
        query = query.whereBetween('created_at', [startOfYear, endOfYear]);
      } else if (isWeek === "true") {
        const startOfWeek = moment(currentDate).startOf('week').format('YYYY-MM-DD HH:mm:ss');
        const endOfWeek = moment(currentDate).endOf('week').format('YYYY-MM-DD HH:mm:ss');
        query = query.whereBetween('created_at', [startOfWeek, endOfWeek]);
      } else {
        query = query.whereBetween('created_at', [startOfDay, endOfDay]);
      }
    }

    //TODO to filter out in date range
    if (from && to) {
      const from = moment(from).utc().format('YYYY-MM-DD HH:mm:ss');
      const to = moment(to).utc().format('YYYY-MM-DD HH:mm:ss');
      query.whereBetween('created_at', [moment(from).format('YYYY-MM-DD HH:mm:ss'), moment(to).format('YYYY-MM-DD HH:mm:ss')]);
    }

    //TODO can query on each field of worker
    if (req.query.name) {
      query.where('name', 'ilike', `%${req.query.name}%`);
    }

    if (req.query.job_title) {
      query.where('job_title', 'ilike', `%${req.query.job_title}%`);
    }

    if (req.query.age) {
      query.where('age', req.query.age);
    }

    if (req.query.email) {
      query.where('email', 'ilike', `%${req.query.email}%`);
    }

    if (req.query.phone) {
      query.where('phone', 'ilike', `%${req.query.phone}%`);
    }

    if (req.query.address) {
      query.where('address', 'ilike', `%${req.query.address}%`);
    }

    if (req.query.city) {
      query.where('city', 'ilike', `%${req.query.city}%`);
    }

    if (req.query.state) {
      query.where('state', 'ilike', `%${req.query.state}%`);
    }

    //TODO get all workers from a particular company
    if (req.query.companyName) {
      query.joinRelation('company').where('company.name', 'ilike', `%${req.query.companyName}%`);
    }

    //TODO Added an optional orderBy filter it can be used on each field
    //TODO example = http://localhost:3000/api/v1/company/worker_info?orderBy=name&orderDirection=desc
    if (req.query.orderBy) {
      const orderBy = req.query.orderBy;
      const orderDirection = req.query.orderDirection || 'asc'; // Default to ascending order if not specified
      query.orderBy(orderBy, orderDirection);
    }

    query.limit(limit).offset(offset);

    const workers = await query;
    res.json({ data: workers, page, limit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
