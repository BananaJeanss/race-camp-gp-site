"use client";

export default function RSVPButton() {
  return (
    <button className="bg-blue-500 w-1/4 rounded-lg p-2">
      <a
        href="https://forms.fillout.com/t/65ky6efj9Fus"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            "https://forms.fillout.com/t/65ky6efj9Fus",
            "rsvpWindow",
            "width=600,height=800"
          );
        }}
      >
        RSVP Here!
      </a>
    </button>
  );
}
