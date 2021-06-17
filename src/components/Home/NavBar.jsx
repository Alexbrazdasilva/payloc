/* eslint-disable react/prop-types */
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiRhombusSplit, mdiWallet, mdiAccount, mdiCog } from "@mdi/js";
import UILargeButton from "./../UI/UILargeButton";

const NavBar = ({ className }) => (
  <React.Fragment>
    <ScrollContainer className={className} component="nav">
      <Link className="nav-item-content" to="/pix">
        <UILargeButton width="120px" rounded="4" labelSize={.75}>
          <Icon path={mdiRhombusSplit} size={1.25} />
          <p className="label">Pix</p>
        </UILargeButton>
      </Link>
      <Link className="nav-item-content" to="/transactions">
        <UILargeButton width="120px" rounded="4" labelSize={.75}>
          <Icon path={mdiWallet} size={1.25} />
          <p className="label">Saldo e movimentações</p>
        </UILargeButton>
      </Link>
      <Link className="nav-item-content" to="/account">
        <UILargeButton width="120px" rounded="4" labelSize={.75}>
          <Icon path={mdiAccount} size={1.25} />
          <p className="label">Informações Pessoais</p>
        </UILargeButton>
      </Link>
      <Link className="nav-item-content" to="/settings">
        <UILargeButton width="120px" rounded="4" labelSize={.75}>
          <Icon path={mdiCog} size={1.25} />
          <p className="label">Configurações</p>
        </UILargeButton>
      </Link>
    </ScrollContainer>
  </React.Fragment>
);
export default NavBar;
