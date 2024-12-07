import { Input } from "@material-tailwind/react";
import React from "react";

const TAGS = [
  "Branding",
  "Development",
  "Web App",
  "Mobile App",
  "AI solution",
  "Design system",
  "E2E Solution",
];

export const ContactForm: React.FC = () => {
  const [tags, setTags] = React.useState<string[]>([]);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  const sendMail = async () => {
    setHasSubmitted(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        budget,
        message,
        tags,
      }),
    });

    if (res.ok) {
      console.log("Mail sent!");
    } else {
      console.error("Error sending mail");
    }
  };

  const canSubmit =
    name.length > 0 &&
    email.length > 0 &&
    message.length > 0 &&
    budget.length > 0;

  if (hasSubmitted) {
    return (
      <div className="min-h-[50vh] w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl text-primary">
          Thank you for your submission!
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <h2 className="text-blue-950 font-normal text-4xl">
        I&apos;m interested in:
      </h2>
      <div className="flex flex-wrap gap-6">
        {TAGS.map((tag) => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-3xl flex gap-6 text-lg border-blue-900 border font-medium ${
              tags.includes(tag)
                ? "bg-primary text-white"
                : "bg-white text-blue-950"
            }`}
            onClick={() => {
              if (tags.includes(tag)) {
                setTags(tags.filter((t) => t !== tag));
              } else {
                setTags([...tags, tag]);
              }
            }}
          >
            {tag}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_180_1793"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_180_1793)">
                <path
                  d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z"
                  fill={tags.includes(tag) ? "#fff" : "#0C1C5A"}
                />
              </g>
            </svg>
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <Input
          variant="standard"
          label="Your name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="lg"
          labelProps={{
            style: {
              color: "hsl(var(--blue-950))",
              fontSize: "1rem",
            },
          }}
          placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <Input
          variant="standard"
          label="Your email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="lg"
          labelProps={{
            style: {
              color: "hsl(var(--blue-950))",
              fontSize: "1rem",
            },
          }}
          placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <Input
          variant="standard"
          label="Budget*"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          size="lg"
          labelProps={{
            style: {
              color: "hsl(var(--blue-950))",
              fontSize: "1rem",
            },
          }}
          placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
        <Input
          variant="standard"
          label="Message*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          size="lg"
          labelProps={{
            style: {
              color: "hsl(var(--blue-950))",
              fontSize: "1rem",
            },
          }}
          placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          crossOrigin={undefined}
        />
      </div>
      <button
        className={`button rounded-full text-white text-md p-2 px-24 w-fit ${
          canSubmit ? "bg-primary" : "bg-gray-500"
        }`}
        onClick={sendMail}
        disabled={!canSubmit}
      >
        Submit
      </button>
    </div>
  );
};
