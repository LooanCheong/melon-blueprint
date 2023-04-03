import Music from "../models/Music";
import User from "../models/User";

export const home = async (req, res) => {
  const musics = await Music.find({}).sort({ like: "desc" });
  console.log(musics);
  return res.render("home", { pageTitle: "Home", musics });
};

export const watch = async (req, res) => {
  const { id } = req.params;

  return res.render("watch", { pageTitle: "watch" });
};
