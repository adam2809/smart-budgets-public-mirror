import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SelectCategory from './SelectCategory';
import media from '../../util/mediaQueries';
import { setFilterCategory } from '../../actions/filters';

/*
Calculations for CSS:
  Transaction has width of 50rem;
  gutter between the filter component and the list is 2 rem
  on screens > 992px the list will be centered, otherwise:
    the half of (100vw - filter - gutter - list) will be
    left and right margins. i.e.:
    vw > 992px:
    max:30rem-2rem-centered Transactions list
    Desktop:
    marginLeft-20rem-2rem-50rem-marginRight
    Tablet:
    Filter component occupies "full screen"
 */

const Wrapper = styled.div`
  display: flex;
  right: calc((100vw - 50rem) / 2 + 52rem);
  margin-left: 2rem;
  top: 10rem;
  position: absolute;
  max-width: 30rem;
  flex-direction: column;
  background-color: ${props => props.theme.primaryBlue};
  padding: 1rem 1rem;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  ${media.desktop`
    right: calc((100vw - 72rem) / 2 + 52rem);
    margin-left: calc((100vw - 72rem) / 2);
  `}
  ${media.tablet`
    right: auto;
    margin-left: auto;
    max-width: 100%;
    padding: 1rem 5rem;
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    opacity: ${props => (props.visible ? '100' : '0')};
    background-color: ${props => props.theme.white};
    transition: opacity 0.3s ease-in-out;
    position: fixed;
    height: calc(100vh - 10rem);
    top: auto;
    bottom: 5rem;
  `}
`;

const Group = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.white};
  margin-bottom: 1rem;
  user-select: none;
  ${media.tablet`
    color: ${props => props.theme.black};
  `}
`;

const GroupName = styled.div`
  font-size: ${props => props.theme.fontSmall};
  width: 100%;
  padding-bottom: 2px;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
  user-select: none;
  ${media.tablet`
    border-bottom: 1px solid ${props => props.theme.greyLightest};
    color: ${props => props.theme.black};
  `}
`;

const Apply = styled.button`
  outline: none;
  font-size: ${props => props.theme.fontSmall};
  font-weight: 500;
  border: 1px solid ${props => props.theme.primaryBlue};
  background-color: ${props => props.theme.primaryBlue};
  color: ${props => props.theme.white};
  border-bottom: 1px solid ${props => props.theme.white};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  user-select: none;
  ${media.tablet`
    font-size: ${props => props.theme.fontMedium};
    padding: 0.5rem 2rem;
    border: 1px solid ${props => props.theme.white};
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.primaryBlue};
    border-bottom: 1px solid ${props => props.theme.primaryBlue};
  `}

  &:active {
    transform: translateY(2px);
  }
`;

const FilterDrawer = ({
  visible, categories, selectCategory, shownCategories,
}) => (
  <Wrapper visible={visible}>
    <Title>Filter</Title>
    <GroupName>Categories</GroupName>
    <Group>
      {
        categories.map(category => (
          <SelectCategory
            key={category.id[0]}
            displayName={category.displayName}
            select={selectCategory}
            ids={category.id}
            visible={shownCategories.includes(category.id[0])}
          />
        ))
      }
    </Group>
    <Apply type="button">Apply Filter</Apply>
  </Wrapper>
);

FilterDrawer.defaultProps = {
  visible: false,
  categories: [],
  shownCategories: [],
};

FilterDrawer.propTypes = {
  visible: PropTypes.bool,
  categories: PropTypes.instanceOf(Array),
  selectCategory: PropTypes.func.isRequired,
  shownCategories: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  visible: state.filters.drawerOpen,
  categories: state.categories,
  shownCategories: state.filters.shownCategories,
});

const mapDispatchToProps = dispatch => ({
  selectCategory: ids => dispatch(setFilterCategory(ids)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrawer);
