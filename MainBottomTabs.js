import { createStackNavigator } from 'react-navigation';

import Settings from './screen/settings/settings';
import About from './screen/settings/about';
import Language from './screen/settings/language';
import EncryptStorage from './screen/settings/encryptStorage';
import WalletsList from './screen/wallets/list';
import WalletTransactions from './screen/wallets/transactions';
import AddWallet from './screen/wallets/add';
import ImportWallet from './screen/wallets/import';
import WalletDetails from './screen/wallets/details';
import WalletExport from './screen/wallets/export';
import BuyBitcoin from './screen/wallets/buyBitcoin';
import scanQrWif from './screen/wallets/scanQrWif';

import details from './screen/transactions/details';
import rbf from './screen/transactions/RBF';
import createrbf from './screen/transactions/RBF-create';

import receiveDetails from './screen/receive/details';

import sendDetails from './screen/send/details';
import sendScanQrAddress from './screen/send/scanQrAddress';
import sendCreate from './screen/send/create';
import Confirm from './screen/send/confirm';
import Success from './screen/send/success';

import ManageFunds from './screen/lnd/manageFunds';
import ScanLndInvoice from './screen/lnd/scanLndInvoice';

const WalletsStackNavigator = createStackNavigator({
  Wallets: {
    screen: WalletsList,
    path: 'wallets',
  },
  Settings: {
    screen: Settings,
    path: 'Settings',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
      },
      headerTintColor: '#0c2550',
    },
  },
  About: {
    screen: About,
    path: 'About',
  },
  Language: {
    screen: Language,
    path: 'Language',
  },
  EncryptStorage: {
    screen: EncryptStorage,
    path: 'EncryptStorage',
  },
});

const SuccessTransactionStackNavigation = createStackNavigator(
  {
    Success: {
      screen: Success,
    },
  },
  { mode: 'modal', headerMode: 'none' },
);

const CreateTransactionStackNavigator = createStackNavigator({
  SendDetails: {
    screen: sendDetails,
  },
  Confirm: {
    screen: Confirm,
  },
  CreateTransaction: {
    screen: sendCreate,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
      },
      headerTintColor: '#0c2550',
    },
  },
});

const MainBottomTabs = createStackNavigator(
  {
    Wallets: {
      screen: WalletsStackNavigator,
      path: 'wallets',
      navigationOptions: {
        header: null,
      },
    },
    WalletTransactions: {
      screen: WalletTransactions,
    },
    AddWallet: {
      screen: AddWallet,
    },
    ImportWallet: {
      screen: ImportWallet,
    },
    ScanQrWif: {
      screen: scanQrWif,
    },
    WalletDetails: {
      screen: WalletDetails,
    },
    WalletExport: {
      screen: WalletExport,
    },
    BuyBitcoin: {
      screen: BuyBitcoin,
    },
    //
    SendDetails: {
      screen: CreateTransactionStackNavigator,
      navigationOptions: {
        header: null,
      },
    },

    TransactionDetails: {
      screen: details,
    },
    Success: {
      screen: SuccessTransactionStackNavigation,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    RBF: {
      screen: rbf,
    },
    CreateRBF: {
      screen: createrbf,
    },

    //

    ReceiveDetails: {
      screen: receiveDetails,
    },

    //

    // LND:

    ManageFunds: {
      screen: ManageFunds,
    },
    ScanLndInvoice: {
      screen: ScanLndInvoice,
    },
    ScanQrAddress: {
      screen: sendScanQrAddress,
    },
  },
  {
    mode: 'modal',
  },
);

export default MainBottomTabs;
