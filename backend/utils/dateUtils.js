const isOverdue = (dueDate) => {
  return new Date(dueDate) < new Date();
};

module.exports = { isOverdue };