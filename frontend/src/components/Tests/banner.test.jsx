import { render, screen } from "@testing-library/react";
import Banner from "../banner/index_banner";

describe("Banner component", () => {
  //  Vérifie que Banner s'affiche bien quand on lui donne une image et un texte
  it("should display the banner with the given props", () => {
    const testText = "Chez vous, partout et ailleurs";
    const testImage = "banner.jpg";

    render(<Banner image={testImage} text={testText} />);

    const img = screen.getByRole("img", { name: testText });
    const text = screen.getByText(testText);

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", testImage);
    expect(img).toHaveAttribute("alt", testText);
    expect(text).toBeInTheDocument();
  });

  //  Vérifie que la classe CSS passée en props (className) s'ajoute bien à la bannière
  it("should apply custom className", () => {
    render(<Banner image="test.jpg" text="Test" className="custom-class" />);

    const section = screen
      .getByRole("img", { name: "Test" })
      .closest("section");

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("kasa-banner");
    expect(section).toHaveClass("custom-class");
  });

  //  Vérifie que, si on ne donne pas de className, la classe par défaut est utilisée
  it("should use default class when no className is provided", () => {
    render(<Banner image="test.jpg" text="Test" />);

    const section = screen
      .getByRole("img", { name: "Test" })
      .closest("section");

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("kasa-banner");
  });

  //  Vérifie que Banner s'affiche même si le texte est vide
  it("should display even with empty text", () => {
    render(<Banner image="test.jpg" text="" />);

    const section = document.querySelector(".kasa-banner");
    const image = document.querySelector(".kasa-banner-img");
    const paragraph = document.querySelector(".kasa-banner-text");

    expect(section).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test.jpg");
    expect(image).toHaveAttribute("alt", "");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeEmptyDOMElement();
  });
});
