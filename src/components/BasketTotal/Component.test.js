import React from "react";
import {shallow} from "enzyme";
import BasketTotal from "./Component";

describe('BasketTotalComponent', function () {
  describe('render', function () {
    let component;
    const renderShallow = (props) => (shallow(<BasketTotal {...props} />));

    [[5.00, '$5.00'], [4.1, '$4.10']].forEach(function ([total, formatted]) {
      describe(`total is ${total}`, function () {
        beforeEach(function () {
          component = renderShallow({total});
        });
        it('should contain the correct total', function () {
          expect(component.html()).toMatchSnapshot();
        });
      });
    });
  });
});
