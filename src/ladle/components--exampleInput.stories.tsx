import "bootstrap/dist/css/bootstrap.min.css";
import type { Story } from "@ladle/react";
import ExampleInput from "@/components/ExampleInput/ExampleInput";

export const ExampleInputStory: Story<{ label: string; content: string }> = ({
  label,
  content,
}) => {
  return <ExampleInput label={label} content={content} />;
};

ExampleInputStory.args = {
  label: "Example",
  content: "abcdef"
};
