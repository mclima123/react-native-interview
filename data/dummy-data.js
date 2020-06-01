const COURSES = [
  {
    id: 1,
    title: 'Web Design',
    description:
      'This course includes a broad series of lessons and activities that offer a variety of modalities for ultimate student engagement and content retention.',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Ribeira Brava',
    startDate: 'November 25, 2019',
    endDate: ' November 30, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 2,
    title: 'Programming Language PHP',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 3,
    title: 'CSS',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'March 5, 2020',
    endDate: 'March 20, 2020',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 4,
    title: 'JavaScript',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 6, 2019',
    endDate: 'December 23, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 5,
    title: 'MVC Architecture',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 6, 2019',
    endDate: 'December 18, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 6,
    title: 'HTML',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 7,
    title: 'React',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 8,
    title: 'CSS',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 9,
    title: 'LESS',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 10,
    title: 'MariaDB',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 11,
    title: 'Programming Language PHP',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 12,
    title: 'JavaScript',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 13,
    title: 'MVC Architecture',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 14,
    title: 'Algorithms',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 15,
    title: 'Ruby on Rails',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 16,
    title: 'Full Stack',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 17,
    title: 'Web Development',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 18,
    title: 'Exploring GraphQL: A Query Language for APIs',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 19,
    title: 'Web Development',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 20,
    title: 'Intro to AJAX',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 21,
    title: 'HTML5 Canvas',
    description:
      'Canvas is an HTML5 element which gives you drawable surface inside your web pages you can control with JavaScript. Powerful enough to use for compositing images and even creating games. ',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: ' February 5, 2020',
    endDate: 'February 20, 2020',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 22,
    title: 'Client-Server Communicationt',
    description:
      'Typically, web developers do not work directly with underlying platform of HTTP. But knowing how information is transferred across the wire is vital to creating efficient and professional apps. This course will dig into the ins and outs of application performance as well as cover common security pitfalls and how to prevent them.',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'April 2, 2020',
    endDate: 'April 30, 2020',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 23,
    title: 'AngularJS: Framework Fundamentals',
    description:
      'This course is best suited for anyone wanting to learn how to use the AngularJS framework through hands-on AngularJS tutorials and examples. Students should have some prior HTML, CSS, and JavaScript training or knowledge. ',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'March 6, 2020',
    endDate: 'March 15, 2020',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 24,
    title: 'Introduction to HTML and JavaScript',
    description:
      'This course teaches basic tasks that are necessary to create web applications with a strong semantic structure, re-usable style components and custom interactive features. This course includes hands-on labs that enable the learner to build basic HTML pages that are the components of a web application used to solve real world problems. ',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'June 10, 2020',
    endDate: 'June 30, 2020',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 25,
    title: 'Building Cloud Services with the Java Spring Framework',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 26,
    title: 'Service-Oriented Architecture',
    description:
      'Based on an understanding of architectural styles, you will review architectures for web applications, then explore the basics of Service-Oriented Architecture (SOA) in two approaches: Web Services (WS*) and Representational State Transfer (REST) architecture. ',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 27,
    title: 'Web Development',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 28,
    title: 'Web Development',
    description:
      "This course is commonly offered through certificate programs in web design and development or may be taken as part of a computer science bachelor's or master's degree programs. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 29,
    title: 'Web Security Fundamentals',
    description:
      'Web applications are inherently insecure, as aptly illustrated by a pile of recent events. Insecurity is however not fundamental to the web platform. As a matter of fact, the modern web offers a variety of powerful security features that help stop a hacker. ',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 30,
    title: 'Responsive Web Design Fundamentals',
    description:
      'The way people browse the web is changing quickly - fewer and fewer users access the web at a desk in front of a large monitor with a keyboard and mouse. ',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 31,
    title: 'Responsive Website Development and Design Capstone',
    description:
      'For your Responsive Website Development and Design Specialization Capstone Project, you will create a complete, responsive, multi-user, data-driven website which aims to solve a particular problem. ',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 32,
    title: 'Browser Rendering Optimization',
    description:
      "Demystifying the browser's rendering pipeline will make it easy for you to build high performance web apps. By following a few simple principles, you'll be capable of drastically reducing the browser's workload and time needed to render each frame. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 33,
    title: 'Responsive Images',
    description:
      "Quick load times and responsive content leads to higher conversions. There's much more to images on the web than <img>. Attributes like srcset, markup techniques using CSS, fonts, and inline images, and the brand new <picture> element are now available to help you create the best possible experience for your users. ",
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Funchal',
    startDate: 'December 5, 2019',
    endDate: 'December 20, 2019',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
  {
    id: 34,
    title: 'Designing RESTful APIs',
    description:
      'A crucial skill for a back-end or full-stack web developer is the ability to make applications that are easily accessible and understood for other developers . ',
    goal: 'The course will combine guided core reading, a series ....',
    courseLocation: 'Açores',
    startDate: 'January 3, 2020',
    endDate: 'January 15, 2020',
    modules: [
      {
        order: 1,
        name: 'Introduction',
      },
      {
        order: 2,
        name: 'Object',
        object: {
          order: 2.1,
          name: 'Application',
        },
      },
      {
        order: 3,
        name: 'work with objects',
      },
      {
        order: 4,
        name: 'website prototyping',
      },
    ],
    observation: {
      type: 'Part-time',
      minimumQualification: '10th grade',
      duration: '40h',
    },
  },
];

export default COURSES;
