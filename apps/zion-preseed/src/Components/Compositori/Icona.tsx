import { FC } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { PitchDeck } from "../../PitchDeckApp/PitchDeck";
import { Cerchio, GridDiv } from "../Elementi/Div";
import { Img } from "../Elementi/Img";
import { P } from "../Elementi/P";
import { TImg } from "./Image";

export interface IIcona {
  icona?: PitchDeck.Path;
  dynamic?: FlattenSimpleInterpolation;
  testo?: string;
  id?: string;
  children?: string;
  gridDiv?: { dynamic: FlattenSimpleInterpolation };
  cerchio?: { dynamic: FlattenSimpleInterpolation };
  p?: { dynamic: FlattenSimpleInterpolation };
  img?: TImg;
  key?: string;
  className?: string;
}
export class Icona implements IIcona {
  IconaP = styled(P)<IIcona>`
    ${(props) => props.dynamic}
    font-family: 'Space Mono', monospace;
    text-align: center;
  `;
  constructor(
    public icona: PitchDeck.Path,
    public dynamic: FlattenSimpleInterpolation,
    public testo: string,
    public id?: string,
    public children?: string,
    public gridDiv?: { dynamic: FlattenSimpleInterpolation },
    public cerchio?: { dynamic: FlattenSimpleInterpolation },
    public p?: { dynamic: FlattenSimpleInterpolation },
    public img?: TImg
  ) {}
  component: FC<IIcona> = () => {
    // img.dynamic = css`
    //   height: 80%;
    //   place-self: center;
    // `

    let idCerchio = "cerchio" + this.id;
    let idTesto = "testo" + this.id;
    let margin = "0.4em";

    this.gridDiv!.dynamic = css`
      margin: 0 ${margin} 0 ${margin};
    `;

    return (
      <GridDiv id={this.id} key={this.id} {...this.gridDiv}>
        <Cerchio id={idCerchio} key={idCerchio} {...this.cerchio}>
          <Img {...this.img}></Img>
        </Cerchio>
        <this.IconaP id={idTesto} key={idTesto} {...this.p}>
          {this.children}
        </this.IconaP>
      </GridDiv>
    );
  };
}

let IconaP = styled(P)`
  ${(props: IIcona) => props.dynamic}
  font-family: 'Space Mono', monospace;
  text-align: center;
`;

// interface IIcona {
//   id: any;
//   children: any;
//   gridDiv: any;
//   cerchio: any;
//   p: any;
//   img?: TImg;
// }

export default function IconaComponent({
  id,
  children,
  gridDiv,
  cerchio,
  img,
  p,
}: IIcona) {
  // img.dynamic = css`
  //   height: 80%;
  //   place-self: center;
  // `

  let idCerchio = "cerchio" + id;
  let idTesto = "testo" + id;
  let margin = "0.4em";

  gridDiv!.dynamic = css`
    margin: 0 ${margin} 0 ${margin};
  `;

  return (
    <GridDiv id={id} key={id} {...gridDiv}>
      <Cerchio id={idCerchio} key={idCerchio} {...cerchio}>
        <Img {...img}></Img>
      </Cerchio>
      <IconaP id={idTesto} key={idTesto} {...p}>
        {children}
      </IconaP>
    </GridDiv>
  );
}
