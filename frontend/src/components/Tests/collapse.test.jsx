import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "../collapse/index_collapse";

describe("Collapse component", () => {
  //  Vérifie que le titre passé en props est bien affiché
  it("should display the given title", () => {
    render(
      <Collapse title="Test Title">
        <p>Test content</p>
      </Collapse>,
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  //  Vérifie que le collapse est fermé par défaut
  it("should be closed by default", () => {
    render(
      <Collapse title="Test Title">
        <p>Test content</p>
      </Collapse>,
    );

    const content = document.querySelector(".content-collapse");

    expect(content).toBeInTheDocument();
    expect(content).not.toHaveClass("open");
  });

  //  Vérifie qu'un clic sur le bouton ouvre le collapse
  it("should open when the button is clicked", () => {
    render(
      <Collapse title="Test Title">
        <p>Test content</p>
      </Collapse>,
    );

    const button = screen.getByRole("button");
    const content = document.querySelector(".content-collapse");

    fireEvent.click(button);

    expect(content).toBeInTheDocument();
    expect(content).toHaveClass("open");
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  //  Vérifie qu'un deuxième clic referme le collapse
  it("should close when the button is clicked twice", () => {
    render(
      <Collapse title="Test Title">
        <p>Test content</p>
      </Collapse>,
    );

    const button = screen.getByRole("button");
    const content = document.querySelector(".content-collapse");

    // 1er clic, on ouvre
    fireEvent.click(button);
    // 2e clic, on referme
    fireEvent.click(button);

    expect(content).toBeInTheDocument();
    expect(content).not.toHaveClass("open");
  });

  //  Vérifie que le composant affiche bien les elements enfants qu'on lui passe
  it("should render the children passed to it", () => {
    render(
      <Collapse title="Equipments">
        <ul>
          <li>Equipment 1</li>
          <li>Equipment 2</li>
        </ul>
      </Collapse>,
    );

    expect(screen.getByText("Equipment 1")).toBeInTheDocument();
    expect(screen.getByText("Equipment 2")).toBeInTheDocument();
  });
});
