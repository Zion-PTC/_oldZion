import { css } from "styled-components";
export const checkSize = (props) => {
    let size;
    const { small, mid, big } = props;
    if (small)
        size = { w: 100, h: 100 };
    if (mid)
        size = { w: 200, h: 200 };
    if (big)
        size = { w: 300, h: 300 };
    else
        size = { w: 100, h: 100 };
    return css `
    width: ${size.w.toString()}px;
    height: ${size.h.toString()}px;
  `;
};
