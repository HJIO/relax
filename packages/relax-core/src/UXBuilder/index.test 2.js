import React, { Component } from 'react';
import Icon from '../Icon';
import UX from './UXBuilder';
const testComp = (<Icon textAlign={'left'} insertSpace={true} layoutRule={"block"} stickyRule={0} md={3}>test</Icon>);
describe('UXPreset mapping test',function () {

    it('should receive:',function(){
        expect(UX.build(testComp)).toEqual([]);
    });
});