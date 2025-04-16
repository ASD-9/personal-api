const { readData, writeData } = require("./dataUtils");

const getAbout = (req, res) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Données récupérées", data: data.personalInfo.about });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}

const getContact = (req, res) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Données récupérées", data: data.personalInfo.contact });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}

const getSkills = (req, res) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Données récupérées", data: data.personalInfo.skills });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}

const getLanguages = (req, res) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Données récupérées", data: data.personalInfo.languages });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}

const getExperiences = (req, res) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Données récupérées", data: data.personalInfo.experiences });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}

const getEducation = (req, res) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Données récupérées", data: data.personalInfo.education });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}

const getGithub = (req, res) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Données récupérées", data: data.personalInfo.github });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}

const getProjects = (req, res) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.status(200).json({ message: "Données récupérées", data: data.projects });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}

const getProject = (req, res) => {
  try {
    const data = readData();
    if (!data) {
      return res.status(500).json({ message: "Erreur serveur" });
    }
    const project = data.projects.find((project) => project.id === parseInt(req.params.id));
    if (!project) {
      return res.status(404).json({ message: "Projet non trouvé" });
    }
    res.status(200).json({ message: "Données récupérées", data: project });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}

module.exports = {
  getAbout,
  getContact,
  getSkills,
  getLanguages,
  getExperiences,
  getEducation,
  getGithub,
  getProjects,
  getProject
};
