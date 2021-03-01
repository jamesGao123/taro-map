import React, { Component } from 'react'
import { View, Map, CoverView } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      includePadding:[],
      includePoints:[{
        latitude: 30.21317,
        longitude: 120.2298,
      },{
        latitude: 30.21317,
        longitude: 120.2098,
      }],
      markers:[{
        iconPath: `https://himg.bdimg.com/sys/portraitn/item/2fd7g630701000000`,
        latitude: 30.21317,
        longitude: 120.2298,
        markerLevel: 10,
        width: 22,
        height: 34,
        zIndex: 10,
      },{
        iconPath: `https://himg.bdimg.com/sys/portraitn/item/2fd7g630701000000`,
        latitude: 30.21317,
        longitude: 120.2098,
        markerLevel: 10,
        width: 22,
        height: 34,
        zIndex: 10,
      }]
    }
  }

  render () {
    const {includePoints,includePadding,markers}=this.state;
    return (
      <View className='index'>
        <Map id='map'
          className='map'
          setting={{
            showCompass: 0,
            tiltGesturesEnabled: 0,
          }}
          include-points={includePoints}
          include-padding={includePadding}
          markers={markers}
        />
        <CoverView className='cover-view-test'>
          <CoverView>CoverView在支付宝10.1.68及以下文字不正常展示</CoverView>
        </CoverView>
      </View>
    )
  }
}
