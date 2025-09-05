const logger = require("../utils/logger");
const { validateRegistration } = require("../utils/validation");

const registerUser = async (req, res) => {
  logger.info("Registration endpoint hit");
  try {
    const { error } = validateRegistration(req.body);
    if (error) {
      logger.warn("Validation error", error.details[0].message);
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
      });
    }
    const { username, email, password } = req.body;
  } catch (error) {
    logger.error("Error occurred during registration", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
