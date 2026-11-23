export const projects = [
  {
    id: 1,
    title: "Mini x86 Operating System Kernel",
    description:
      "Built the core components of an x86 OS kernel from scratch in C and Assembly. Implemented virtual memory management using paging (CR3), multitasking scheduling with process and context switching, system calls, and interrupt handling, validated through QEMU and GDB.",
    technologies: ["C", "x86 Assembly", "QEMU", "GDB", "OS Kernel"],
    github: "",
    demo: ""
  },
  {
    id: 2,
    title: "UART Transceiver on FPGA",
    description:
      "Designed and implemented an 8-bit asynchronous UART transmitter and receiver with parity bit support for RS-232 communication. Integrated four independent functional modules handling Tx/Rx processor interrupts and clock domain crossing between transmission and reception clocks.",
    technologies: ["VHDL", "FPGA", "RS-232", "UART", "Digital Design"],
    github: "",
    demo: ""
  },
  {
    id: 3,
    title: "SPI Master Interface on FPGA",
    description:
      "Developed a master SPI controller on a Xilinx Nexys 4 FPGA to enable bidirectional communication with a Pmod joystick. Implemented multi-byte data transfers using a finite state machine to control SCLK and SS signals, validated with VHDL testbenches.",
    technologies: ["VHDL", "Xilinx FPGA", "SPI", "FSM", "Testbench"],
    github: "",
    demo: ""
  },
  {
    id: 4,
    title: "CultureG (Embedded Learning System)",
    description:
      "Built an interactive voice-based learning device on a Raspberry Pi. Enabled real-time spoken Q&A sessions alongside remote content management through a companion mobile app and WebSocket communication.",
    technologies: ["Raspberry Pi", "Python", "WebSockets", "Embedded Linux", "Mobile App"],
    github: "",
    demo: ""
  },
  {
    id: 5,
    title: "Full-Stack Web Application",
    description:
      "Designed and built a full-stack application featuring a modular Java Spring Boot backend, REST APIs, a React frontend, and a PostgreSQL database. Containerized the entire stack with Docker and Docker Compose, and validated features with unit and end-to-end tests.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    github: "",
    demo: ""
  },
  {
    id: 6,
    title: "Multi-Site Enterprise Network Architecture",
    description:
      "Designed and deployed a multi-site enterprise network using Docker to virtualize and isolate network services. Configured Autonomous Systems with dynamic routing protocols and deployed core infrastructure including DNS, DHCP, and VoIP with traffic filtering.",
    technologies: ["Networking", "Docker", "BGP/OSPF", "DNS/DHCP", "VoIP"],
    github: "",
    demo: ""
  },
  {
    id: 7,
    title: "RAT Language Compiler Extension",
    description:
      "Extended a compiler for the RAT programming language in OCaml by adding support for pointers, procedures, pass-by-reference, and enumerated types. Structured a multi-pass pipeline covering AST construction, semantic analysis, and code generation, tested with Dune.",
    technologies: ["OCaml", "Compilers", "AST", "Dune", "Static Analysis"],
    github: "",
    demo: ""
  },
  {
    id: 8,
    title: "Quantum Graph Learning for Molecular Classification",
    description:
      "Evaluated Pasqal Quantum Processing Unit (QPU) capabilities for graph-based machine learning. Explored Graph Neural Networks and quantum graph encodings to classify chemical molecules using quantum computing methods.",
    technologies: ["Python", "Quantum Computing", "Pasqal QPU", "Graph Neural Networks", "Machine Learning"],
    github: "",
    demo: ""
  }, 
  {
    id: 9,
    title: "HagiMule",
    description:
      "Built a large-scale parallel file download system in Java using Remote Method Invocation (RMI) and socket programming to split and transfer files concurrently across distributed nodes.",
    technologies: ["Java", "RMI", "Sockets", "Distributed Systems"],
    github: "",
    demo: ""
  },
  {
    id: 10,
    title: "Automated Bar Prototype (Digital Manufacturing)",
    description:
      "Designed and built an automated drink-dispensing prototype in a small team under the supervision of an IRIT researcher. Combined custom 3D-printed mechanical parts with Python control logic running on a Raspberry Pi 4.",
    technologies: ["Raspberry Pi 4", "Python", "3D Printing", "Prototyping"],
    github: "",
    demo: ""
  },
  {
    id: 11,
    title: "Open-Source VoIP Telecom Architecture",
    description:
      "Designed and deployed a modern telephone network architecture built on open-source technologies. Configured SIP signaling and containerized VoIP services using Docker.",
    technologies: ["SIP", "VoIP", "Docker", "Telecom Networks"],
    github: "",
    demo: ""
  },
  {
    id: 12,
    title: "Voting Methods Analyzer",
    description:
      "Led the development of a voting application in C and Shell that computes and compares election outcomes across multiple algorithmic methods, including Condorcet, Schulze, and Minimax.",
    technologies: ["C", "Shell", "Algorithms", "Git"],
    github: "",
    demo: ""
  }
];