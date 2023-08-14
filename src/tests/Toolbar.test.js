import React from "react";
import { render, screen } from '@testing-library/react';
import Toolbar from "../components/Toolbar.js";

describe("Componente Toolbar", () => {
  it("Renderizar sin errores el componente", () => {
    render(<Toolbar />);
    const toolbarElement = screen.getByTestId("toolbar");
    expect(toolbarElement).toBeInTheDocument();
  });

  it('Contener el texto correcto "Add box"', () => {
    render(<Toolbar />);
    const addButton = screen.getByText("Add box");
    expect(addButton).toBeInTheDocument();
  });

  it('Contener el texto correcto "Remove selected box"', () => {
    render(<Toolbar />);
    const removeSelectedButton = screen.getByText("Remove selected box");
    expect(removeSelectedButton).toBeInTheDocument();
  });
  
  it('Renderizar sin errores el componente LogoGenially', () => {
    render(<Toolbar />);
    const logoGeniallyElement = screen.getByTestId("logoGenially");
    expect(logoGeniallyElement).toBeInTheDocument();
  });
});

