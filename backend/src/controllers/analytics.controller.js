const getMonthlyAnalytics = async (req, res) => {
  try {
    // later this comes from MySQL
    const data = {
      income: 20000,
      expenses: 12500,
      savings: 7500,
      score: 92,
      categories: [
        {
          name: "Food",
          amount: 5000,
          percentage: 40
        },
        {
          name: "Shopping",
          amount: 3125,
          percentage: 25
        },
        {
          name: "Transport",
          amount: 2500,
          percentage: 20
        },
        {
          name: "Utilities",
          amount: 1875,
          percentage: 15
        }
      ]
    };

    res.json(data);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getMonthlyAnalytics };