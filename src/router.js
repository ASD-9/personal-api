const { Router } = require("express");
const router = Router();

const controller = require("./controller");

router.get("/about", controller.getAbout);

router.get("/contact", controller.getContact);

router.get("/skills", controller.getSkills);

router.get("/languages", controller.getLanguages);

router.get("/experiences", controller.getExperiences);

router.get("/education", controller.getEducation);

router.get("/github", controller.getGithub);

router.get("/projects", controller.getProjects);

router.get("/projects/:id", controller.getProject);

module.exports = router;
