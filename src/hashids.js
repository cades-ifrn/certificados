import Hashids from "hashids";

const hashids = new Hashids(
  "cades.natal.br",
  10,
  "0123456789abcdefghijklmnopqrstuvwxyz"
);

export default hashids;
