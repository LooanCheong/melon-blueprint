import Song from "../models/Music";
import User from "../models/User";

export const home = async (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};
