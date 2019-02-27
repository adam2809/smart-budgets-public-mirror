import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import media from '../../util/mediaQueries';

const Wrapper = styled.div`
  padding: 5rem 0 0 0;
  ${media.tablet`
    /* clears Header and bottom Navigation with fixed position */
    padding: 5rem 0;
  `}
`;

const Home = () => (
  <>
    <Header title="Home" />
    <Wrapper>
      <p>This will be the social / home page</p>
    </Wrapper>
  </>
);

export default Home;