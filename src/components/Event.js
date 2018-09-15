import React from "react";
import styled from "styled-components";
import { DateTime } from "luxon";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
  text-align: initial;
  min-width: 255px;
  max-width: 255px;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  .top,
  .bottom {
    > div {
      padding: 0 18px;
      &:first-child {
        padding-top: 18px;
      }
      &:last-child {
        padding-bottom: 18px;
      }
    }
  }
  .top,
  .bottom,
  .rip {
    background-color: #fff;
  }
  .top {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    .deetz {
      padding-bottom: 10px !important;
    }
  }
  .bottom {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 18px;
    height: 58px;
    padding-top: 10px;
    .barcode {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAABCAYAAABXChlMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAACPSURBVChTXVAJDsMgDOsrVpELiqb+/4c0DgStQ7JMYogNh2gdvg5VfXFCRIZaC6BOtnoNFpvaumNmwb/71Frrm8XvgYkker1/g9WzMOsohaOGNziRs5inDsAn8yEPengTapJ5bmdZ2Yv7VvfPN6AH2NJx7nOWPTf1/78hoqgxhzw3ZqYG1Dr/9ur3y8vMxgNZhcAUnR4xKgAAAABJRU5ErkJggg==);
      background-repeat: repeat-y;
      min-width: 94px;
      min-height: 30px;
    }
    .buy {
      display: block;
      font-size: 12px;
      font-weight: bold;
      background-color: #5d9cec;
      padding: 0 18px;
      line-height: 30px;
      border-radius: 15px;
      color: #fff;
      text-decoration: none;
    }
  }
  .rip {
    height: 20px;
    margin: 0 10px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAACCAYAAAB7Xa1eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAAaSURBVBhXY5g7f97/2XPn/AcCBmSMQ+I/AwB2eyNBlrqzUQAAAABJRU5ErkJggg==);
    background-size: 4px 2px;
    background-repeat: repeat-x;
    background-position: center;
    position: relative;
    box-shadow: 0 1px 0 0 #fff, 0 -1px 0 0 #fff;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      border: 5px solid transparent;
      border-top-color: #fff;
      border-right-color: #fff;
      border-radius: 100%;
      pointer-events: none;
    }
    &:before {
      left: -10px;
    }
    &:after {
      transform: translate(-50%, -50%) rotate(225deg);
      right: -40px;
    }
  }

  .-bold {
    font-weight: bold;
  }

  .--flex-column {
    flex-direction: column;
    display: flex;
  }

  .--flex-row-jsb {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
  }

  .name {
    font-size: 1.2rem;
  }

  .type {
    text-transform: uppercase;
    font-size: 0.9rem;
  }
`;

export default ({ type, name, date, location, hours, url }) => {
  const datetime = DateTime.fromISO(date);

  return (
    <Item>
      <div className="top --flex-column">
        <div className="type">{type}</div>
        <div className="name -bold">{name}</div>
        <div className="deetz --flex-row-jsb">
          <div className="--flex-column">
            <div>
              {datetime.setLocale("pt-BR").toLocaleString(DateTime.DATE_MED)}
            </div>
            <div className="-bold">{location}</div>
          </div>
          <div className="--flex-column">
            <div title="Carga Horária Total">CH</div>
            <div className="-bold">{hours}h</div>
          </div>
        </div>
      </div>
      <div className="rip" />
      <div className="bottom --flex-row-jsb">
        <div className="barcode" />
        <a className="buy" href={url} target="_blank">
          Abrir
        </a>
      </div>
    </Item>
  );
};
