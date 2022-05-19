import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import style from './style';

import Navigator from './components/Navigator';

const Menu = () => {
  const [isHidden, setHiddenStatus] = useState(true);

  return (
    <>
      <TouchableOpacity
        style={style.Icon}
        onPress={() => setHiddenStatus(false)}>
        <Image
          source={require('../../imgs/menu.png')}
          style={style.IconImage}
        />
      </TouchableOpacity>

      <Navigator isHidden={isHidden} onClose={setHiddenStatus} />
    </>
  );
};

export default Menu;
