import React from "react";

const commentsData = [
  {
    name: "Yash singh",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
    replies: [
      {
        name: "Vivek singh",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
        replies: [],
      },
      {
        name: "Simran singh",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
        replies: [
          {
            name: "Yash singh",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
            replies: [
              {
                name: "Yash singh",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
                replies: [
                  {
                    name: "Yash singh",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
                    replies: [
                      {
                        name: "Yash singh",
                        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
                        replies: [
                          {
                            name: "Yash singh",
                            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vivek singh",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
    replies: [],
  },
  {
    name: "Mira singh",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
    replies: [
      {
        name: "Yash singh",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
        replies: [
          {
            name: "Ram singh",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
            replies: [],
          },
        ],
      },
      {
        name: "Yash singh",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
        replies: [],
      },
    ],
  },
  {
    name: "Raghav singh",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
    replies: [],
  },
  {
    name: "Raghav singh",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
    replies: [],
  },
  {
    name: "Raghav singh",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
    replies: [
      {
        name: "Yash singh",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
        replies: [],
      },
      {
        name: "Yash singh",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
        replies: [],
      },
      {
        name: "Yash singh",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
        replies: [],
      },
      {
        name: "Yash singh",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
        replies: [
          {
            name: "Yash singh",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
            replies: [
              {
                name: "Yash singh",
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
                replies: [
                  {
                    name: "Yash singh",
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
                    replies: [
                      {
                        name: "Yash singh",
                        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
                        replies: [
                          {
                            name: "Yash singh",
                            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit animi nisi.",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-lg bg-gray-100 p-2 rounded">
      <img
        className="w-12 h-12"
        src="data:image/jpeg;base64,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"
        alt="usr-icon"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
