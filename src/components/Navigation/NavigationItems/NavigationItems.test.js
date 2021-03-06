import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()})

describe('<NavigationItems />',()=>{
    it('should have two Nav elements if not loggedin',()=>{
        const wrapper= shallow(<NavigationItems />);
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })

    it('should have three Nav elements if loggedin',()=>{
        const wrapper= shallow(<NavigationItems token='gadjadsk'/>);
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })
})