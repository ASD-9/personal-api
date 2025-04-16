const controller = require("../src/controller");
const { readData, writeData } = require("../src/dataUtils");

jest.mock("../src/dataUtils");

const mockData = {
  "personalInfo": {
    "about": "About me.",
    "contact": {
      "email": "test@mail.fr",
      "phone": "0909090909",
      "linkedin": "linkedin.com"
    },
    "skills": {
      "backend": ["NodeJS", "MySQL"],
      "frontend": ["Flutter", "React"],
      "devops": ["Docker", "Jenkins", "SonarQube"],
      "tools": ["Suite Atlassian", "Git"],
      "methodology": ["Méthodologie agile", "UML"],
      "soft": ["Communication technique", "Qualité du code et respect des bonnes pratiques"]
    },
    "languages": [{
      "language": "Anglais",
      "level": "Intermédiaire",
      "comment": "Lecture et rédaction technique OK"
    }],
    "experiences": [
      {
        "title": "Title",
        "company": "Company",
        "place": "Place",
        "startDate": "Octobre 2023",
        "endDate": "Octobre 2024",
        "details": []
      }
    ],
    "education": [
      {
        "title": "Title",
        "school": "School",
        "place": "Place",
        "startDate": "Octobre 2023",
        "endDate": "Octobre 2024",
        "details": []
      }
    ],
    "github": "github.com"
  },
  "projects": [
    {
      "id": 1,
      "title": "Title",
      "description": "Application",
      "technologies": ["Flutter", "NodeJS", "MySQL"],
      "url": "https://exemple.fr"
    }
  ]
}


describe("controller", () => {
  let res;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAbout", () => {
    it("should return the about data", () => {
      readData.mockReturnValue(mockData);

      controller.getAbout({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Données récupérées", data: mockData.personalInfo.about });
    });

    it("should return status 500 if no data is return", () => {
      readData.mockReturnValue(false);

      controller.getAbout({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    });

    it("should return status 500 if an error occurs", () => {
      readData.mockImplementation(() => { throw new Error("test error") });

      controller.getAbout({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    })
  });

  describe("getContact", () => {
    it("should return the contact data", () => {
      readData.mockReturnValue(mockData);

      controller.getContact({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Données récupérées", data: mockData.personalInfo.contact });
    });

    it("should return status 500 if no data is return", () => {
      readData.mockReturnValue(false);

      controller.getContact({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    });

    it("should return status 500 if an error occurs", () => {
      readData.mockImplementation(() => { throw new Error("test error") });

      controller.getContact({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    })
  });

  describe("getSkills", () => {
    it("should return the skills data", () => {
      readData.mockReturnValue(mockData);

      controller.getSkills({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Données récupérées", data: mockData.personalInfo.skills });
    });

    it("should return status 500 if no data is return", () => {
      readData.mockReturnValue(false);

      controller.getSkills({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    });

    it("should return status 500 if an error occurs", () => {
      readData.mockImplementation(() => { throw new Error("test error") });

      controller.getSkills({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    })
  });

  describe("getLanguages", () => {
    it("should return the languages data", () => {
      readData.mockReturnValue(mockData);

      controller.getLanguages({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Données récupérées", data: mockData.personalInfo.languages });
    });

    it("should return status 500 if no data is return", () => {
      readData.mockReturnValue(false);

      controller.getLanguages({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    });

    it("should return status 500 if an error occurs", () => {
      readData.mockImplementation(() => { throw new Error("test error") });

      controller.getLanguages({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    })
  });

  describe("getExperiences", () => {
    it("should return the experiences data", () => {
      readData.mockReturnValue(mockData);

      controller.getExperiences({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Données récupérées", data: mockData.personalInfo.experiences });
    });

    it("should return status 500 if no data is return", () => {
      readData.mockReturnValue(false);

      controller.getExperiences({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    });

    it("should return status 500 if an error occurs", () => {
      readData.mockImplementation(() => { throw new Error("test error") });

      controller.getExperiences({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    })
  });

  describe("getEducation", () => {
    it("should return the education data", () => {
      readData.mockReturnValue(mockData);

      controller.getEducation({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Données récupérées", data: mockData.personalInfo.education });
    });

    it("should return status 500 if no data is return", () => {
      readData.mockReturnValue(false);

      controller.getEducation({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    });

    it("should return status 500 if an error occurs", () => {
      readData.mockImplementation(() => { throw new Error("test error") });

      controller.getEducation({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    })
  });

  describe("getGithub", () => {
    it("should return the github data", () => {
      readData.mockReturnValue(mockData);

      controller.getGithub({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Données récupérées", data: mockData.personalInfo.github });
    });

    it("should return status 500 if no data is return", () => {
      readData.mockReturnValue(false);

      controller.getGithub({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    });

    it("should return status 500 if an error occurs", () => {
      readData.mockImplementation(() => { throw new Error("test error") });

      controller.getGithub({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    })
  });

  describe("getProjects", () => {
    it("should return the projects data", () => {
      readData.mockReturnValue(mockData);

      controller.getProjects({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Données récupérées", data: mockData.projects });
    });

    it("should return status 500 if no data is return", () => {
      readData.mockReturnValue(false);

      controller.getProjects({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    });

    it("should return status 500 if an error occurs", () => {
      readData.mockImplementation(() => { throw new Error("test error") });

      controller.getProjects({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    })
  });

  describe("getProject", () => {
    it("should return the projects data", () => {
      readData.mockReturnValue(mockData);

      controller.getProject({
        params: {
          id: 1,
        },
      }, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "Données récupérées", data: mockData.projects[0] });
    });

    it("should return status 500 if no data is return", () => {
      readData.mockReturnValue(false);

      controller.getProject({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    });

    it("should return status 404 if project is not found", () => {
      readData.mockReturnValue(mockData);

      controller.getProject({
        params: {
          id: 99,
        },
      }, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "Projet non trouvé" });
    });

    it("should return status 500 if an error occurs", () => {
      readData.mockImplementation(() => { throw new Error("test error") });

      controller.getProject({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erreur serveur" });
    })
  });
});
