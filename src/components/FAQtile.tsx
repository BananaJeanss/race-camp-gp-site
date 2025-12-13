// i was going to use this but its just easier and more customizable to add all faq tiles manually instead of components

export interface FAQTitleProps {
  title: string;
  image: string;
  description: string;
}

export default function FAQTile({
  image,
  title,
  description,
}: FAQTitleProps) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="pb-4">
          <h3 className="text-xl font-semibold underline pb-2">{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br />") }} />
        </div>
      </div>
      <div className="hidden sm:block pl-18">
        <img
          src={image}
          alt="FAQ Image"
          className="w-48 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
