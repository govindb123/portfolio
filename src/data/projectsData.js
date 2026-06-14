export const projects = [
  {
    slug: "arenas",
    title: "Arenas",
    role: "Ruby on Rails Backend Developer",
    description:
      "Centralized backend platform supporting multiple gaming applications. Contributed to scalable REST APIs, shared business logic, and backend services.",
    tech: ["Ruby on Rails", "REST APIs", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    images: null,
    type: "professional",

    overview:
      "Arenas is a centralized sports gaming backend platform designed to manage multiple sports and gaming events. The system enables administrators to create sports, schedule matches, manage games, handle live match events, update real-time scores, process game results, and deliver live updates to connected clients through MQTT. The platform supports various sports and event types while ensuring scalable and reliable backend operations.",

    features: [
      "Created and managed multiple sports and tournament matches.",
      "Developed APIs for game creation and match scheduling.",
      "Implemented game lifecycle management including start and completion.",
      "Handled real-time match score updates for different sports.",
      "Managed sport-specific events such as runs, fours, sixes, wickets, goals, and other live actions.",
      "Generated and processed game and match results.",
      "Integrated MQTT for real-time event broadcasting and live score updates.",
      "Built scalable REST APIs for frontend and third-party integrations.",
      "Optimized backend workflows using Redis caching and PostgreSQL.",
      "Maintained shared business logic for multiple gaming applications."
    ],

    challenges:
      "One of the key challenges was handling real-time match events and ensuring score consistency across multiple connected users. MQTT integration, event synchronization, and maintaining accurate live updates for various sports required efficient backend processing and scalable architecture."
  },

  {
    slug: "heroic",
    title: "Heroic",
    role: "Ruby on Rails Developer",
    description:
      "Sports platform delivering live updates and user management features across Cricket, Tennis, and Football.",
    tech: ["Ruby on Rails", "REST APIs", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&q=80",
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=300&q=80",
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=300&q=80",
      "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=300&q=80",
    ],
    type: "professional",

    overview:
      "Heroic is a multi-panel sports gaming and betting platform supporting Cricket, Football, and Tennis. The application provides live sports updates, betting markets, contest management, wallet operations, and financial distribution through dedicated User, Admin, Agent, and Super Admin panels. Built with Ruby on Rails, the platform handles end-to-end betting workflows, real-time score updates, and configurable platform settings.",

    features: [
      "🎯 USER PANEL",
      "• View live match listings and match details.",
      "• Access real-time scorecards and event updates.",
      "• Place bets across multiple betting markets.",
      "• Participate in contests and track active bets.",
      "• View wallet balance, transactions, and betting history.",
      "• Check leaderboards based on winnings and contest performance.",

      "🛠️ ADMIN PANEL",
      "• Create and manage sports contests.",
      "• Configure betting markets and betting rules.",
      "• Manage contest participation and settlements.",
      "• Process betting outcomes and declare results.",
      "• Monitor platform betting activities.",

      "💰 AGENT PANEL",
      "• Manage user fund distribution.",
      "• Handle commission calculations.",
      "• Manage owner and platform revenue sharing.",
      "• Process GST and platform charges.",
      "• Monitor financial transactions and wallet operations.",

      "⚙️ SUPER ADMIN PANEL",
      "• Configure platform-wide settings.",
      "• Manage coin limits and wallet limits.",
      "• Configure betting limits and business rules.",
      "• Control global feature settings.",
      "• Manage 20+ customizable user panel UI configurations.",
      "• Update platform behavior dynamically without code changes.",

      "🏆 SPORTS & BETTING",
      "• Support Cricket, Football, and Tennis.",
      "• Handle live score updates and match events.",
      "• Support Toss Winner, Match Winner, Over, Over Winner, Goal, and Goal Winner markets.",
      "• Process real-time betting and result calculations.",
      "• Generate leaderboards based on user winnings.",

      "🚀 BACKEND ",
      "• Developed scalable Ruby on Rails REST APIs.",
      "• Implemented role-based access for multiple panels.",
      "• Managed PostgreSQL database operations.",
      "• Built secure and optimized business logic for betting workflows."
    ],

    challenges:
      "Developing Heroic required handling complex betting workflows across multiple user roles while maintaining real-time sports updates and financial accuracy. Ensuring seamless interaction between User, Admin, Agent, and Super Admin panels, along with dynamic platform configurations and secure transaction processing, was one of the major backend challenges."
  },

  {
    slug: "ballchalu",
    title: "BallChalu",
    role: "Angular Developer",
    description:
      "Fantasy sports application like Dream11 featuring contest management, team creation workflows, and user interactions.",
    tech: ["Angular", "JavaScript", "REST APIs"],
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=80",
    images: null,
    type: "professional",

    overview:
      "BallChalu is a fantasy sports and betting user application inspired by platforms like Dream11 and My11Circle. Built using Angular, the application integrates with backend REST APIs to provide live match data, betting markets, contests, wallet management, and real-time user interactions. The platform delivers a responsive and interactive experience for sports enthusiasts across multiple sports.",

    features: [
      "🏏 MATCH CENTER",
      "• Display live and upcoming sports matches.",
      "• Show match details and real-time score updates.",
      "• Fetch live sports data through REST APIs.",
      "• Support multiple sports events and competitions.",

      "🎮 FANTASY & BETTING",
      "• Display various betting and fantasy markets.",
      "• Allow users to participate in contests.",
      "• Show betting options and market details.",
      "• Display live contest status and outcomes.",

      "👤 USER EXPERIENCE",
      "• Developed responsive and user-friendly Angular components.",
      "• Implemented user dashboard and profile management.",
      "• Display wallet balance and transaction history.",
      "• Show betting history and contest participation.",
      "• Integrated leaderboard and user rankings.",

      "🔗 API INTEGRATION",
      "• Integrated backend REST APIs for dynamic data.",
      "• Consumed live match and score APIs.",
      "• Handled betting market and contest APIs.",
      "• Managed API responses and frontend state updates.",
      "• Implemented efficient data loading and error handling.",

      "⚡ FRONTEND ",
      "• Built reusable Angular components and modules.",
      "• Implemented routing and navigation.",
      "• Developed responsive layouts for mobile and web.",
      "• Optimized UI performance and user interactions.",
      "• Ensured seamless integration with backend services."
    ],

    challenges:
      "One of the key challenges was integrating multiple backend APIs while maintaining a smooth and responsive user experience. Managing real-time sports updates, betting markets, contest data, and dynamic user interactions required efficient state management, optimized API handling, and scalable Angular architecture."
  },

  {
    slug: "sklash-games",
    title: "Sklash Games",
    role: "Ruby on Rails Backend Developer",
    description:
      "Multiplayer gaming platform supporting Ludo, Chess, Space Invader and more with backend services and real-time features.",
    tech: ["Ruby on Rails", "Redis", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=300&q=80",
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=300&q=80",
      "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=300&q=80",
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=300&q=80",
    ],
    type: "professional",

    overview:
      "Sklash Games is a multiplayer mobile gaming platform for Android and iOS that hosts a variety of skill-based games, including Ludo, Fast Ludo, Chess, Tic-Tac-Toe, Space Invader, Running Games, Shooter Games, and more. As a Ruby on Rails Backend Developer, I developed and maintained REST APIs responsible for game lifecycle management, real-time score handling, match creation, result processing, and MQTT-based live event communication.",

    features: [
      "🎮 GAME MANAGEMENT",
      "• Developed APIs for creating game matches.",
      "• Implemented match start and game lifecycle management.",
      "• Managed multiplayer game sessions.",
      "• Supported multiple game categories and formats.",

      "🏆 MATCH & SCORE HANDLING",
      "• Built score update and score submission APIs.",
      "• Processed game results and winner calculations.",
      "• Managed player participation and match status.",
      "• Handled game completion and result settlements.",

      "📡 REAL-TIME FEATURES",
      "• Integrated MQTT for real-time game updates.",
      "• Broadcast live game events to connected players.",
      "• Synchronized player actions and game states.",
      "• Delivered low-latency score and match updates.",

      "🎯 MULTI-GAME PLATFORM",
      "• Supported Ludo and Fast Ludo.",
      "• Managed Chess and Tic-Tac-Toe gameplay.",
      "• Handled Space Invader and arcade-style games.",
      "• Supported Running and Shooter game modules.",
      "• Built reusable backend services for multiple game types.",

      "🚀 BACKEND DEVELOPMENT",
      "• Developed scalable Ruby on Rails REST APIs.",
      "• Optimized PostgreSQL database operations.",
      "• Utilized Redis for performance optimization and caching.",
      "• Implemented secure backend business logic.",
      "• Integrated mobile applications with backend services.",
      "• Maintained high-performance APIs for Android and iOS platforms."
    ],

    challenges:
      "One of the major challenges was managing real-time multiplayer game interactions while ensuring data consistency and low latency. Handling concurrent game sessions, MQTT event synchronization, score submissions, and supporting multiple game types through a common backend architecture required efficient API design and scalable backend solutions."
  },


  {
    slug: "sportx",
    title: "SportX",
    role: "Ruby on Rails Backend Developer",
    description:
      "Cricket-focused platform like Cricbuzz providing live scores, alerts, and event-driven notifications.",
    tech: ["Ruby on Rails", "REST APIs", "Redis"],
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    images: null,
    type: "professional",

    overview:
      "SportX is a live cricket scoring platform inspired by Cricbuzz, designed to deliver real-time match updates, ball-by-ball commentary, scorecards, and cricket statistics. As a Ruby on Rails Backend Developer, I developed REST APIs for match management, live score updates, event handling, and notification services, ensuring users receive accurate and timely cricket information.",

    features: [
      "🏏 LIVE MATCHES",
      "• Developed APIs for live and upcoming cricket matches.",
      "• Managed match schedules and fixtures.",
      "• Displayed detailed match information and status.",
      "• Supported multiple cricket tournaments and series.",

      "📊 LIVE SCORING",
      "• Implemented real-time score update APIs.",
      "• Managed ball-by-ball match events.",
      "• Processed runs, wickets, extras, overs, and innings updates.",
      "• Generated live scorecards and match summaries.",

      "📈 MATCH STATISTICS",
      "• Developed APIs for batting and bowling statistics.",
      "• Managed player and team performance data.",
      "• Generated match scorecards and innings details.",
      "• Displayed partnerships and key match events.",

      "🔔 ALERTS & NOTIFICATIONS",
      "• Implemented event-driven match notifications.",
      "• Delivered live score alerts and match updates.",
      "• Managed important match event notifications.",
      "• Supported real-time user engagement features.",

      "🚀 BACKEND DEVELOPMENT",
      "• Built scalable Ruby on Rails REST APIs.",
      "• Optimized backend performance using Redis.",
      "• Integrated live cricket data workflows.",
      "• Managed secure and efficient backend business logic.",
      "• Ensured reliable API performance for high user traffic."
    ],

    challenges:
      "One of the key challenges was maintaining accurate real-time cricket updates while handling high-frequency match events such as ball-by-ball scoring, wickets, overs, and innings transitions. Building scalable APIs and efficient event processing was essential to deliver a seamless live scoring experience."
  },
];

export const personalProjects = [
  {
    slug: "blinkit-trial",
    title: "Blinkit Trial",
    role: "Full Stack Ruby on Rails Developer",
    description:
      "Built a Blinkit-inspired grocery delivery platform with Seller, Customer, and Rider modules. Sellers manage products and categories, customers place and track orders, and riders handle deliveries with real-time status updates.",
    tech: ["Ruby on Rails", "HTML", "CSS", "JavaScript", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=600&q=80",
    images: null,
    github: "https://github.com/govindb123/Blinkit_trial",
    live: "https://blinkit-trial.onrender.com",
    renderNotice: true,
    type: "personal",
    overview:
      "Blinkit Trial is a full-stack grocery delivery web application inspired by Blinkit. It supports three user roles — Seller, Customer, and Rider — each with their own dashboard and workflows. The app is built with Ruby on Rails and deployed on Render.",
    features: [
      "Seller dashboard — manage products, categories, and inventory",
      "Customer flow — browse products, add to cart, and place orders",
      "Rider module — accept deliveries and update order status in real-time",
      "Session-based authentication with role switching",
      "Order tracking with status updates at each delivery stage",
      "Responsive UI built with HTML, CSS, and JavaScript",
      "PostgreSQL database for reliable data persistence",
      "Deployed on Render with free tier hosting",
    ],
    challenges:
      "Managing three separate user roles with different permissions and dashboards within a single Rails app was the core challenge. Implementing clean session-based role switching and keeping the order status flow consistent across Seller, Customer, and Rider views required careful controller and model design.",
  },
  {
    slug: "whatsapp-chat-app",
    title: " Demo whatsapp-chat-app",
    role: "Full Stack ROR Developer",
    description:
      "A real-time chat application built with React and Ruby on Rails, allowing authenticated users to connect and chat instantly with other registered users.",

    tech: [
      "Ruby on Rails",
      "React.js",
      "JavaScript",
      "JWT Authentication",
      "PostgreSQL",
      "REST API",
      "Tailwind CSS"
    ],

    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
    images: null,

    github: "https://github.com/govindb123/chat-frontend",
    githubBackend: "https://github.com/govindb123/chat_app",
    live: "https://chatwithgovind.vercel.app/",

    type: "personal",

    overview:
      "A WhatsApp-inspired real-time chat application where users can securely register, log in, and communicate with other registered users. The application features online presence indicators, message status tracking, and read receipts for an interactive messaging experience.",

    features: [
      "JWT-based user authentication",
      "User registration and login",
      "Real-time one-to-one messaging",
      "Chat with any registered user",
      "Online and offline user status",
      "Green indicator for active users",
      "Blue tick read receipts",
      "Message delivery status tracking",
      "Real-time chat updates",
      "Responsive UI for desktop and mobile",
      "Secure Ruby on Rails REST APIs",
      "React frontend with dynamic chat interface"
    ],

    challenges:
      "Implemented real-time messaging, user presence tracking, message status updates, and JWT authentication while maintaining smooth communication between the React frontend and Ruby on Rails backend.",

    note: {
      text: "Backend service is currently unavailable because the free hosting plan has expired. The frontend remains accessible, but live chat functionality requires the backend server to be running.",
      color: "yellow"
    }
  },
  {
    slug: "tic-tac-toe",
    title: "Multiplayer Tic-Tac-Toe",
    role: "Full Stack Developer",
    description:
      "A real-time multiplayer Tic-Tac-Toe game built with Nakama and PostgreSQL. Players can create or join private rooms, compete in Classic and Timed modes, and climb the global leaderboard.",

    tech: [
      "Nakama",
      "JavaScript",
      "PostgreSQL",
      "Docker",
      "REST APIs",
      "Real-time Multiplayer"
    ],

    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",

    images: null,

    github: "https://github.com/govindb123/tic-tac-toe-nakama",

    live: "https://tic-tac-toe-nakama-govind.vercel.app/",

    backend: "https://tic-tac-toe-nakama-o8hr.onrender.com/",

    type: "personal",

    overview:
      "Built a real-time multiplayer Tic-Tac-Toe game using Nakama as the backend game server. Players can log in, create private rooms with unique room codes, or join existing rooms to play against friends. The game supports Classic and Timed modes, real-time gameplay synchronization, and a leaderboard system based on player victories. Nakama provides authentication, matchmaking, and multiplayer game management capabilities. :contentReference[oaicite:0]{index=0}",

    features: [
      "User authentication and login.",
      "Create private game rooms.",
      "Join rooms using a unique room code.",
      "Real-time multiplayer gameplay.",
      "Classic mode with unlimited matches.",
      "Timed mode with countdown gameplay.",
      "Automatic match synchronization.",
      "Global leaderboard based on wins.",
      "Responsive user interface.",
      "Private friend matches."
    ],

    challenges:
      "Implemented real-time multiplayer game logic, room creation and joining workflows, authoritative game state synchronization, timed gameplay mechanics, and leaderboard integration using Nakama and PostgreSQL.",

    note:
      "Frontend: https://tic-tac-toe-nakama-govind.vercel.app/ | Backend Health Check: https://tic-tac-toe-nakama-o8hr.onrender.com/ . If the backend URL displays a white screen, it indicates the Nakama server is running and ready to accept game connections."
  },
  {
    slug: "food-order-app",
    title: "Food Ordering WebSite",
    role: "Frontend Developer",

    description:
      "A modern food ordering application built with Next.js and TypeScript, featuring cart management, checkout, order tracking, and comprehensive testing.",

    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
      "REST API"
    ],

    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    images: null,

    github: "https://github.com/govindb123/food-order-app",
    live: "https://food-order-beta-seven.vercel.app/",

    type: "personal",

    overview:
      "A responsive food ordering platform that allows users to browse menu items, add multiple products to their cart, manage quantities, enter delivery details, and track order progress through various stages. The application demonstrates modern frontend development practices with TypeScript and comprehensive testing.",

    features: [
      "Browse food menu with images and pricing",
      "Add multiple items to the shopping cart",
      "Increase or decrease item quantities",
      "Remove items from the cart",
      "Dynamic cart total calculation",
      "Delivery details form with validation",
      "Checkout workflow",
      "Real-time order status tracking",
      "Visual order progress indicator",
      "REST API integration",
      "Responsive design for mobile and desktop",
      "12 passing unit and component tests",
      "Fast and optimized Next.js application"
    ],

    challenges:
      "Implemented state management for cart operations, form validation, order tracking workflow, API integration, and comprehensive testing using Jest and React Testing Library while ensuring a smooth user experience across devices."
  },

  {
    slug: "vehicle-wash",
    title: "Vehicle Washing Service Website",
    role: "Frontend Developer",

    description:
      "A responsive vehicle washing service platform built with Angular that enables customers to browse services, view pricing, and book vehicle wash appointments online.",

    tech: [
      "Angular",
      "TypeScript",
      "HTML",
      "CSS",
      "Responsive Design"
    ],

    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    images: null,

    github: "https://github.com/govindb123/vehicle_wash",
    live: "https://sablewash.vercel.app/",

    type: "personal",

    overview:
      "SableWash is an online vehicle washing booking platform that simplifies the process of scheduling vehicle cleaning services. Customers can explore available wash packages, select their vehicle type, check pricing, and book a convenient wash slot. Booking details are sent to the washing center owner for further processing.",

    features: [
      "Modern and responsive Angular UI",
      "Browse multiple vehicle washing services",
      "Support for different vehicle types",
      "Service pricing section",
      "Online wash slot booking",
      "Customer details collection",
      "Vehicle information submission",
      "Booking request notification",
      "Contact section for customer inquiries",
      "Mobile and desktop friendly design",
      "Simple and intuitive user experience"
    ],

    challenges:
      "Designed an easy-to-use booking workflow that collects customer information, vehicle details, and preferred service options while maintaining a responsive and user-friendly interface across devices."
  },
  {
    slug: "lavanya-logistics",
    title: "Logistics Website",
    role: "Frontend Developer",

    description:
      "A modern logistics and transportation website built with Next.js that enables customers to schedule cargo pickups and transportation services with an easy-to-use booking system.",

    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],

    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&q=80",
    images: null,

    github: "https://github.com/govindb123/lavanya-logisticks-new",
    live: "https://lavanya-logisticks.vercel.app/",

    type: "personal",

    overview:
      "Lavanya Logistics is a transportation and cargo booking platform designed to simplify the process of scheduling goods transportation. Customers can request vehicle pickups, specify cargo weight, provide pickup and delivery information, and submit booking requests directly to the logistics service provider.",

    features: [
      "Modern and responsive Next.js interface",
      "Cargo transportation service information",
      "Online pickup vehicle booking",
      "Cargo weight selection",
      "Pickup and delivery workflow",
      "Customer booking form",
      "Address and contact information collection",
      "Booking request submission",
      "Service and company information pages",
      "Mobile and desktop responsive design",
      "Easy navigation and user-friendly experience"
    ],

    challenges:
      "Developed a complete booking workflow for logistics services, including cargo weight selection, pickup scheduling, customer information management, and booking request submission while ensuring a seamless user experience across devices."
  },
  {
    slug: "developer-portfolio",
    title: "Portfolio - Govind Birajdar",
    role: "Frontend Developer",

    description:
      "A modern personal portfolio website built with React and Vite to showcase my professional experience, technical skills, education, certifications, and software development projects.",

    tech: [
      "React.js",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design"
    ],

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",

    images: null,

    github: "https://github.com/govindb123/portfolio",

    live: null,

    type: "personal",

    overview:
      "A responsive developer portfolio designed to present my journey as a software developer. The website highlights my professional experience, education, technical skills, certifications, and personal projects through an interactive and modern user interface.",

    features: [
      "Professional introduction section",
      "About me and career summary",
      "Technical skills showcase",
      "Work experience timeline",
      "Educational background",
      "Project portfolio with details",
      "Certifications and achievements",
      "Responsive design for all devices",
      "Smooth scrolling navigation",
      "Modern UI built with Tailwind CSS",
      "GitHub repository integration",
      "Contact section"
    ],

    challenges:
      "Designed and developed a clean, responsive portfolio that effectively organizes professional information, project showcases, and technical skills while ensuring excellent performance and user experience."
  },
];
