import { motion } from "framer-motion";
import styled from "styled-components";

export const Title = styled(motion.div)`
  background: #fdc830; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f37335,
    #fdc830
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f37335,
    #fdc830
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  font-size: 3rem;
  font-weight: 800;
  padding: 20px 0rem;
`;
