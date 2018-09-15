import { Font } from "@react-pdf/renderer";

export default () => {
  Font.register(
    "https://cdn.rawgit.com/google/fonts/c9d3903b/ofl/lato/Lato-Regular.ttf",
    {
      family: "Lato"
    }
  );

  Font.register(
    "https://cdn.rawgit.com/google/fonts/c9d3903b/ofl/lato/Lato-Bold.ttf",
    {
      family: "Lato-Bold"
    }
  );
};
