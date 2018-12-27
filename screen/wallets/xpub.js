import React, { Component } from 'react';
import { Dimensions, Platform, ActivityIndicator, View } from 'react-native';
import { QRCode as QRSlow } from 'react-native-custom-qr-codes';
import { BlueSpacing40, SafeBlueArea, BlueCard, BlueText, BlueHeaderDefaultSub } from '../../BlueComponents';
import PropTypes from 'prop-types';
const QRFast = require('react-native-qrcode');
/** @type {AppStorage} */
let BlueApp = require('../../BlueApp');
let loc = require('../../loc');
const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;
let isIpad;
if (aspectRatio > 1.6) {
  isIpad = false;
} else {
  isIpad = true;
}

export default class WalletXpub extends Component {
  static navigationOptions = {
    header: ({ navigation }) => {
      return <BlueHeaderDefaultSub leftText={loc.wallets.xpub.title} onClose={() => navigation.goBack(null)} />;
    },
  };

  constructor(props) {
    super(props);

    let secret = props.navigation.state.params.secret;
    let wallet;

    for (let w of BlueApp.getWallets()) {
      if (w.getSecret() === secret) {
        // found our wallet
        wallet = w;
      }
    }

    this.state = {
      isLoading: true,
      wallet,
      xpub: wallet.getXpub(),
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: false,
      showQr: false,
    });

    setTimeout(() => {
      this.setState({ showQr: true });
    }, 1000);
  }

  determineSize = () => {
    if (width > 312) {
      return width - 48;
    }
    return 312;
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    /*

          <BlueText style={{marginBottom: 10}}>
            WIF stands for Wallet Import Format. Backup your WIF (also shown on QR) in a safe place.
          </BlueText>

          <Divider style={{ backgroundColor: '#ebebeb', marginBottom:20, }} />

    */

    return (
      <SafeBlueArea style={{ flex: 1, paddingTop: 20 }}>
        {(() => {
          if (isIpad) {
            return <BlueSpacing40 />;
          }
        })()}
        <BlueCard style={{ alignItems: 'center', flex: 1 }}>
          <View>
            <BlueText>{this.state.wallet.getTypeReadable()}</BlueText>
          </View>

          {(() => {
            if (this.state.showQr) {
              if (Platform.OS === 'ios' || this.state.xpub.length < 54) {
                return (
                  <QRSlow
                    content={this.state.xpub}
                    size={this.determineSize()}
                    color={BlueApp.settings.foregroundColor}
                    backgroundColor={BlueApp.settings.brandingColor}
                    logo={require('../../img/qr-code.png')}
                    ecl={'Q'}
                  />
                );
              } else {
                return (
                  <QRFast
                    value={this.state.xpub}
                    size={this.determineSize()}
                    fgColor={BlueApp.settings.brandingColor}
                    bgColor={BlueApp.settings.foregroundColor}
                  />
                );
              }
            } else {
              return (
                <View>
                  <ActivityIndicator />
                </View>
              );
            }
          })()}

          <BlueText style={{ marginVertical: 8 }}>{this.state.xpub}</BlueText>
        </BlueCard>
      </SafeBlueArea>
    );
  }
}

WalletXpub.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        secret: PropTypes.string,
      }),
    }),
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }),
};
