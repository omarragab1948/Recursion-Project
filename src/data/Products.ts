import { IProduct } from "../types/product";

export const productsData: IProduct[] = [
  {
    id: 1,
    name: "Laptop Pro 15",
    image: "/lab-pro-15.jpg",
    category: {
      id: "A1",
      name: "Electronics",
      subCategory: {
        id: "A1-1",
        name: "Laptops",
        subCategory: {
          id: "A1-1-1",
          name: "High Performance",
          subCategory: null,
        },
      },
    },
    description: "A high-performance laptop for all your needs.",
    comments: [
      {
        id: 1,
        author: "John Doe",
        content: "This laptop is amazing!",
        timestamp: "2024-09-20T12:34:56",
        replies: [
          {
            id: 2,
            author: "Jane Smith",
            content: "I agree! It's been fantastic for my work.",
            timestamp: "2024-09-20T13:22:13",
            replies: [
              {
                id: 3,
                author: "Michael Brown",
                content: "I had some issues with the battery life.",
                timestamp: "2024-09-21T10:15:35",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        author: "Alice Green",
        content: "Does this laptop support gaming?",
        timestamp: "2024-09-22T08:30:12",
        replies: [
          {
            id: 5,
            author: "John Doe",
            content: "Yes, it runs most games pretty well.",
            timestamp: "2024-09-22T09:05:30",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Smartphone Ultra X",
    image: "/ultra x.jpg",
    category: {
      id: "B1",
      name: "Mobile Devices",
      subCategory: {
        id: "B1-1",
        name: "Smartphones",
        subCategory: {
          id: "B1-1-1",
          name: "Flagship Phones",
          subCategory: null,
        },
      },
    },
    description:
      "A cutting-edge smartphone with a stunning display and camera.",
    comments: [
      {
        id: 1,
        author: "Emily White",
        content: "The camera quality is mind-blowing!",
        timestamp: "2024-09-21T14:05:00",
        replies: [
          {
            id: 2,
            author: "John Doe",
            content: "Totally agree. The night mode is amazing.",
            timestamp: "2024-09-21T14:20:30",
            replies: [
              {
                id: 3,
                author: "Michael Brown",
                content: "I found it a bit too expensive.",
                timestamp: "2024-09-21T15:00:00",
                replies: [
                  {
                    id: 4,
                    author: "Jane Smith",
                    content: "True, but it's worth the price.",
                    timestamp: "2024-09-21T15:30:00",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        author: "Alice Green",
        content: "How is the battery life?",
        timestamp: "2024-09-22T10:15:12",
        replies: [
          {
            id: 6,
            author: "John Doe",
            content: "Lasts me through the whole day, even with heavy use.",
            timestamp: "2024-09-22T11:00:45",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Laptop ProBook 9000",
    image: "/probook.png",
    category: {
      id: "A2",
      name: "Computers",
      subCategory: {
        id: "A2-1",
        name: "Laptops",
        subCategory: {
          id: "A2-1-1",
          name: "Gaming Laptops",
          subCategory: null,
        },
      },
    },
    description:
      "A high-performance gaming laptop with a powerful GPU and fast refresh rate display.",
    comments: [
      {
        id: 1,
        author: "David Johnson",
        content: "The performance is incredible, runs all my games smoothly.",
        timestamp: "2024-10-05T16:45:00",
        replies: [
          {
            id: 2,
            author: "Sarah Lee",
            content: "I agree, the cooling system is also very efficient.",
            timestamp: "2024-10-05T17:00:30",
            replies: [
              {
                id: 3,
                author: "Chris Evans",
                content: "The battery life could be better though.",
                timestamp: "2024-10-05T18:00:00",
                replies: [
                  {
                    id: 4,
                    author: "Emma Watson",
                    content: "True, but it's a gaming laptop, so expected.",
                    timestamp: "2024-10-05T18:30:00",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        author: "Oliver Queen",
        content: "How is the keyboard feel?",
        timestamp: "2024-10-06T09:15:12",
        replies: [
          {
            id: 6,
            author: "John Doe",
            content: "Very comfortable, great for long gaming sessions.",
            timestamp: "2024-10-06T10:00:45",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Smartwatch Pulse 3",
    image: "/smartwatch.jpg",
    category: {
      id: "C3",
      name: "Wearables",
      subCategory: {
        id: "C3-1",
        name: "Smartwatches",
        subCategory: {
          id: "C3-1-1",
          name: "Fitness Trackers",
          subCategory: null,
        },
      },
    },
    description:
      "A sleek smartwatch with advanced health monitoring features and long battery life.",
    comments: [
      {
        id: 1,
        author: "Sophia Martinez",
        content: "The heart rate monitor is very accurate.",
        timestamp: "2024-11-12T12:30:00",
        replies: [
          {
            id: 2,
            author: "James Bond",
            content: "Yes, and the sleep tracking is impressive too.",
            timestamp: "2024-11-12T13:00:30",
            replies: [
              {
                id: 3,
                author: "Linda Carter",
                content: "I wish it had more customizable watch faces.",
                timestamp: "2024-11-12T14:00:00",
                replies: [
                  {
                    id: 4,
                    author: "Bruce Wayne",
                    content: "Agreed, but overall, it's a great device.",
                    timestamp: "2024-11-12T14:30:00",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        author: "Peter Parker",
        content: "How is the battery life?",
        timestamp: "2024-11-13T08:15:12",
        replies: [
          {
            id: 6,
            author: "Mary Jane",
            content: "Lasts me almost a week on a single charge.",
            timestamp: "2024-11-13T09:00:45",
            replies: [],
          },
        ],
      },
    ],
  },
];
