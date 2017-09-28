var bio = {
  "name": "YIJING YIN",
  "role": "User Experience Designer" + " | " + "Product Designer",
  "contacts": {
    "mobile": "15618168277",
    "email": "muyyj@hotmail.com",
    "github": "ymaomaoy",
    "location": "Shanghai",
    "linkedin": "yijing yin"
  },
  "welcomeMessage": "Hi,I'm an UX designer with passion to make ideas happen.",
  "skills": ["Interaction Design", "User Research", "Protytyping"],
  "biopic": "images/me.png"
};

bio.self_introduction = "With a mixed background in Industrial Design, Interaction Design and Design Research," +
  "I‘m keen on understanding people, their motivations and contexts in order to inform and create experiences that could be benefitial to users." + "<br>" +
  "For me,design is to make ideas happen and to make things better." + "<br>" +
  "As a designer obsessed over details , I am always searching for opportunities to make it better." +
  "I appreciate team collaboration and hold a positive view to communicate with cross-discipline team." + "<br>";

bio.others = "<br>More about me：Gamification Practitioner / Emoji fan / Cat lover / Lurker on Bilibili";

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedSelfIntroduction = HTMLselfIntroduction.replace("%data%", bio.self_introduction);
  var formattedOthers = HTMLothers.replace("%data%", bio.others);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

  $('#bio').append(formattedName + formattedRole);
  $('#biopic').append(formattedBioPic);
  $('#bio').append(HTMLheaderDescription);
  $('.selfIntroduction').append(formattedSelfIntroduction + formattedOthers);
  $('#contact').append(HTMLcontactGeneric);
  $('.contact-entry').append(formattedMobile + formattedEmail + formattedLinkedin);
  $('#footerContacts').append(formattedMobile + formattedEmail + formattedLinkedin);
};

bio.display();

var work = {
  "jobs": [
    {
      "title": "User Experience Designer",
      "employer": "Archex",
      "location": "Shanghai",
      "dates": "Jul 2016 till now",
      "companyIntro": "ArcheX is a food, digital and business innovation firm.<br>",
      "descripition": "Yijing worked on research, design, and user testing, as well as client communications for various lean UX and design projects. The projects include software development , gamified system design, smart retail and media research etc.Main work content includes:<br>",
      "mainResponsibility": "&middot Product design.Define product strategy, product features and product requirement documents.<br>" +
      "&middot Interaction design.Design and prototype user flows and experience.Make low-fi to hi-fi prototype.Animate transition and micro interactions with Principle and After Effect.<br>" +
      "&middot Research. Conduct user research and usability testing,make interview tools, organize workshops to test initial ideas with prototypes.<br>"
    },
    {
      "title": "UI Designer / Research Assistent",
      "employer": "Bits x Bites",
      "location": "Shanghai",
      "dates": "Sep 2015 - Jan 2016",
      "companyIntro": "Bits x Bites is China’s first purpose + profit, food-focused, accelerator venture capital platform.<br>",
      "descripition": "Yijing worked for website redesign project as principal designer and service prototyping project as research assistant.Main work content includes:<br>",
      "mainResponsibility": "&middot Define content and design user interfaces.Work closely with front-end developer. <br>" +
        "&middot Conduct user research with service design approach.<br>" +
        "&middot Facilitate workshops to test initial ideas and prototypes.<br>"
    }
  ],
  "internship": [
    {
      "title": "Interaction Design Intern",
      "employer": "Tencent",
      "location": "Shanghai",
      "dates": "May - Sep 2015",
      "companyIntro": "ISUX (Internet Social User Experience) ,Shanghai design center.<br>",
      "descripition": "Worked on Qidian,Social-CRM management system,from early concepts, low-fi prototypes to hi-fi prototypes. Main work content includes:<br>",
      "mainResponsibility": "&middot Define user flows and create wireframes.<br>" +
        "&middot Define interaction specs.<br>"
    },
    {
      "title": "Product Design Intern",
      "employer": "Philips",
      "location": "Shanghai",
      "dates": "June - Aug 2014",
      "companyIntro": "Philips Lighting, Shanghai design center.<br>",
      "descripition": "Participated in several innovation projects .Main work content includes:<br>",
      "mainResponsibility": "&middot Create storyboard, sketch ideas, make prototypes.<br>" +
        "&middot Product design with 3D software.<br>" +
        "&middot Conduct competitive research and desk research.<br>"
    },
    {
      "title": "Design Intern",
      "employer": "LOE Design",
      "location": "Shanghai",
      "dates": "Sep 2013 - Apr 2014",
      "companyIntro": "LOE DESIGN is a professional design planning and design consulting company.<br>",
      "descripition": "Participated in cross-discipline projects through design research, product design, motion design and visual design.",
      "mainResponsibility": "Worked with design team in visual design exploration, storytelling and detailed interaction design."
    }
  ]
};

work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedCompanyIntro = HTMLcompanyIntro.replace("%data%", work.jobs[i].companyIntro);
    var formattedWorkDescription = HTMLworkDescripition.replace("%data%", work.jobs[i].descripition);
    var formattedMainResponsibility = HTMLmainResponsibility.replace("%data%", work.jobs[i].mainResponsibility);

    $("#work").append(HTMLworkStart);
    $(".work-entry:last").append(formattedTitle + formattedEmployer + formattedDates +
      formattedCompanyIntro + formattedWorkDescription + formattedMainResponsibility);
    // $(".work-entry:last").append(formattedEmployer);
    // $(".work-entry:last").append(formattedDates);
    // $(".work-entry:last").append(formattedCompanyIntro);
    // $(".work-entry:last").append(formattedWorkDescription);
    // $(".work-entry:last").append(formattedMainResponsibility);
  }

  for (var k = 0; k < work.internship.length; k++) {
    var formattedTitle = HTMLworkTitle.replace("%data%", work.internship[k].title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.internship[k].employer);
    var formattedDates = HTMLworkDates.replace("%data%", work.internship[k].dates);
    var formattedCompanyIntro = HTMLcompanyIntro.replace("%data%", work.internship[k].companyIntro);
    var formattedWorkDescription = HTMLworkDescripition.replace("%data%", work.internship[k].descripition);
    var formattedMainResponsibility = HTMLmainResponsibility.replace("%data%", work.internship[k].mainResponsibility);

    $("#work").append(HTMLworkStart);
    $(".work-entry:last").append(formattedTitle + formattedEmployer + formattedDates +
    formattedCompanyIntro + formattedWorkDescription + formattedMainResponsibility);
    // $(".work-entry:last").append(formattedEmployer);
    // $(".work-entry:last").append(formattedDates);
    // $(".work-entry:last").append(formattedCompanyIntro);
    // $(".work-entry:last").append(formattedWorkDescription);
    // $(".work-entry:last").append(formattedMainResponsibility);
  }
};

work.display();

var education = {
  "schools": [
    {
      "name": "Tongji University",
      "college": "College of Innovation and Design",
      "location": "Shanghai",
      "dates": "2013-2016",
      "degree": "Master",
      "majors": ["Design"]
    },
    {
      "name": "HFG Offenbach",
      "college": "Product Department",
      "location": "Offenbach",
      "dates": "2014-2015",
      "degree": "Exchange study",
      "majors": ["Product Design"]
    },
    {
      "name": "Jiangnan University",
      "college": "School of Design",
      "location": "Wuxi",
      "dates": "2009-2013",
      "degree": "Bachelor",
      "majors": ["Industrial Design"]
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro To Programming",
      "school": "Udacity",
      "dates": "May - Nov 2017",
      "url": "https://www.udacity.com/",
    },
    {
      "title": "Leading for Creativity",
      "school": "IDEO U",
      "dates": "Oct - Nov 2016",
      "url": "https://www.ideou.com/",
    },
  ]
};

education.display = function() {
  for (var i = 0; i < education.schools.length; i++) {
    var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedCollege = HTMLschoolCollecge.replace("%data%", education.schools[i].college);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedCollege);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedMajor);
  }

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (var k = 0; k < education.onlineCourses.length; k++) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
      var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
      var TitleLink = formattedTitle.replace("#", education.onlineCourses[k].url);

      $("#education").append(HTMLonlineStart);
      $(".onlinecourse-entry:last").append(TitleLink);
      console.log(TitleLink);
      $(".onlinecourse-entry:last").append(formattedSchool);
      $(".onlinecourse-entry:last").append(formattedDates);
    }
  }
};

education.display();

var projects = [
  {
    "title": "Engaging - Rewarding system",
    "dates": "July 2016 - Apr 2017",
    "description": "Rewarding system is a gamified application to improve user engagement of ERP application," +
      " which helps salesmen to place order and record visits." +
      " As a Web App on Wechat platform, users can easily access to rewarding system." +
      " In rewarding system, users can get reward, exchange for trophy and edit their profiles.",
    "images": ["images/enaging.png"]
  },
  {
    "title": "Magenta Research",
    "dates": "June - August 2017",
    "description": "Media research on Huge,a design firm that has created its own media platform.",
    "images": []
  },
  {
    "title": "Lab000",
    "dates": "June - August 2017",
    "description": "Resrach for hot topic:\'new retail\'.",
    "images": []
  }
];

projects.display = function() {
  if (projects.length > 0) {
    for (var i = 0; i < projects.length; i++) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects[i].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects[i].description);

      $('.projects').append(HTMLprojectStart);
      $('.project-entry:last').append(formattedTitle);
      $('.project-entry:last').append(formattedDates);
      $('.project-entry:last').append(formattedDescription);
    }

    // for (var j = 0, jLen = projects[i].images.length; j < jLen; j++) {
    //   var formattedImage = HTMLprojectImage.replace(DATA, projects.projects[i].images[j]);
    //
    //   $('.project-entry:last').append(formattedImage);
    // }
  }
};
projects.display();

var skills = {
  "skillpic": "images/skills.png",
  "professional": [
    "Skilled at design methods and design thinking, understanding of how to design through research, analysis, product insights and user-centered design approach.",
    "Basic knowledge in HTML / CSS / Javascript / Python,as well as agile methodologies."
  ],
  "capabilities": [
    "Proficient in spoken and written English and Chinese, basic knowledge in German.",
    "Ability of communication, collaboration and observation."
  ]
};

skills.display = function() {
  var formattedSkillMap = HTMLskillsMap.replace("%data%", skills.skillpic);
  $("#skills").append(formattedSkillMap);
  $("#skills").append(HTMLprofessionStart);
  $("#skills").append(HTMLcapabilityStart);

  for (var i = 0; i < skills.professional.length; i++) {
    var formattedProfession = HTMLprofessionalSkills.replace("%data%", skills.professional[i]);
    $("#profession.skills:last").append(formattedProfession);
  }

  for (var k = 0; k < skills.capabilities.length; k++) {
    var formattedCapability = HTMLcapabilities.replace("%data%", skills.capabilities[k]);
    $("#capability.skills:last").append(formattedCapability);
  }
};

skills.display();

var honor = {
  "certifications": [
    {
      "name": "Leading for Creativity",
      "dates": "Nov 2016",
      "descripition": "IDEO U,online training program"
    },
    {
      "name": "Intro To Programming",
      "dates": "Oct 2017",
      "descripition": "Udacity,online training program"
    }
  ],
  "awards": [
    {
      "name": "Merit Award",
      "dates": "Aug 2014",
      "descripition": "Lite-on Award"
    },
    {
      "name": "Best Promotion Award &" + "<br>Best Environment friendly Award",
      "dates": "Apr 2014",
      "descripition": "International Higher Education Collaboration on Upcycling of Industry"
    },
    {
      "name": "Best Graduation Design",
      "dates": "Jun 2013",
      "descripition": "School of design,Jiangnan University"
    }
  ]
};

honor.display = function() {
  for (var i = 0; i < honor.certifications.length; i++) {
    var formattedName = HTMLhonorlName.replace("%data%", honor.certifications[i].name);
    var formattedDates = HTMLhonorDates.replace("%data%", honor.certifications[i].dates);
    var formattedDescription = HTMLhonorDescription.replace("%data%", honor.certifications[i].descripition);

    $("#honor").append(HTMLhonorStart);
    $(".honor-entry:last").append(formattedName);
    $(".honor-entry:last").append(formattedDates);
    $(".honor-entry:last").append(formattedDescription);
  }

  for (var k = 0; k < honor.awards.length; k++) {
    var formattedName = HTMLhonorlName.replace("%data%", honor.awards[k].name);
    var formattedDates = HTMLhonorDates.replace("%data%", honor.awards[k].dates);
    var formattedDescription = HTMLhonorDescription.replace("%data%", honor.awards[k].descripition);

    $("#honor").append(HTMLhonorStart);
    $(".honor-entry:last").append(formattedName);
    $(".honor-entry:last").append(formattedDates);
    $(".honor-entry:last").append(formattedDescription);
  }
};

honor.display();

$('#mapDiv').append(googleMap);
