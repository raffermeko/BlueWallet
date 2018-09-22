module.exports = {
  _: {
    storage_is_encrypted: 'Your storage is encrypted. Password is required to decrypt it',
    enter_password: 'Enter password',
    bad_password: 'Bad pasword, try again',
    months_ago: 'months ago',
    days_ago: 'days ago',
    hours_ago: 'hours ago',
    never: 'never',
  },
  wallets: {
    list: {
      tabBarLabel: 'Monederos',
      app_name: 'Blue Wallet',
      title: 'Mi Monederos de Bitcoin',
      header: 'Un Monedero esta representado con secreto (clave privada) y una dirección' + 'que puedes compartir para recibir monedas.',
      add: 'Añadir Monedero',
      create_a_wallet: 'Create a wallet',
      create_a_wallet1: "It's free and you can create",
      create_a_wallet2: 'as many as you like',
      latest_transaction: 'latest transaction',
      empty_txs1: 'Your transactions will appear here,',
      empty_txs2: 'none at the moment',
    },
    add: {
      title: 'Añadir Monedero',
      description:
        'Puedes escanear el monedero de papel (en WIF - Formato de importación de monederos) o crear un nuevo monedero. Monederos segwit estan compatibles por defecto.',
      scan: 'Escaniar',
      create: 'Crear',
      label_new_segwit: 'Nuevo SegWit',
      wallet_name: 'wallet name',
      wallet_type: 'wallet type',
      or: 'or',
      import_wallet: 'Import wallet',
      imported: 'Imported',
      coming_soon: 'Coming soon',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Detalles del Monedero',
      address: 'Dirección',
      type: 'Tipo',
      label: 'Etiqueta',
      are_you_sure: 'Estas seguro?',
      yes_delete: 'Si, eliminar',
      no_cancel: 'No, cancelar',
      delete_this_wallet: 'Eliminar eso Monedero',
      export_backup: 'Exportar / guardar',
    },
    export: {
      title: 'Exportacion de Monedero',
    },
    import: {
      title: 'import',
      explanation:
        "Write here you mnemonic, private key, WIF, or anything you've got. BlueWallet will do it's best to guess the correct format and import your wallet",
      imported: 'Imported',
      error: 'Failed to import. Is it event valid?',
      success: 'Success',
      do_import: 'Import',
      scan_qr: 'or scan QR code instead?',
    },
    scanQrWif: {
      go_back: 'Regresar',
      cancel: 'Cancelar',
      decoding: 'Descodificación',
      input_password: 'Ingrese su contraseña',
      password_explain: 'Eso es BIP38 clave privada encriptada',
      bad_password: 'Mal contraseña',
      wallet_already_exists: 'Eso monedero ya existe',
      bad_wif: 'Mal WIF',
      imported_wif: 'Importado WIF ',
      with_address: ' con  dirección ',
      imported_segwit: 'Importado SegWit',
      imported_legacy: 'Importado Legado',
      imported_watchonly: 'Imported Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transacciónes',
      title: 'Mi Transacciónes',
      description: 'Una lista de las transacciones entrantes o salientes de sus monederos',
      conf: 'conf',
    },
    details: {
      title: 'Detalles de Transaccion',
      from: 'De',
      to: 'A',
    },
  },
  send: {
    list: {
      tabBarLabel: 'Enviar',
      header: 'Elige monedero',
    },
    details: {
      title: 'Crear Transaccion',
      amount_fiels_is_not_valid: 'La cantidad no es válida',
      fee_fiels_is_not_valid: 'La tasa no es válida',
      address_fiels_is_not_valid: 'La dirección no es válida',
      receiver_placeholder: 'La dirección de recipiente',
      amount_placeholder: 'cantidad para enviar (in BTC)',
      fee_placeholder: 'más tasa de transaccion (in BTC)',
      memo_placeholder: 'comentario (para ti mismo)',
      cancel: 'Cancelar',
      scan: 'Escaniar',
      create: 'Crear',
      remaining_balance: 'Balance disponible',
    },
    create: {
      title: 'Crear una Transaccion',
      error: 'Error al crear una transacción. ¿Dirección o cantidad estan invalidas?',
      go_back: 'Regresar',
      this_is_hex: 'Este es representacion hex de transacción, firmado y listo para ser transmitido a la red. ¿Continuar?',
      to: 'A',
      amount: 'Cantidad',
      fee: 'Tasa',
      tx_size: 'TX tamaño',
      satoshi_per_byte: 'satoshiPorByte',
      memo: 'Comentario',
      broadcast: 'Transmitir',
      not_enough_fee: 'Not enough fee. Increase the fee',
    },
  },
  receive: {
    list: {
      tabBarLabel: 'Recivir',
      header: 'Elige el monedero',
    },
    details: {
      title: 'Comparte esta dirección con el pagador',
    },
  },
  settings: {
    tabBarLabel: 'Ajustes',
    header: 'Ajustes',
    plausible_deniability: 'Negación plausible...',
    storage_not_encrypted: 'Almacenamiento: no esta encriptado',
    storage_encrypted: 'Storage: encrypted',
    password: 'Contraseña',
    password_explain: 'Crea la contraseña que usarás para descifrar el almacenamiento',
    retype_password: 'Ingresa la contraseña de nuevo',
    passwords_do_not_match: 'Contraseñas deben ser iguales',
    encrypt_storage: 'Cifrar almacenamiento',
    about: 'Sobre nosotros',
  },
  plausibledeniability: {
    title: 'Plausible Deniability',
    help:
      'Under certain circumstances, you might be forced to disclose a ' +
      'password. To keep your coins safe, BlueWallet can create another ' +
      'encrypted storage, with a different password. Under the pressure, ' +
      'you can disclose this password to a 3rd party. If entered in ' +
      "BlueWallet, it will unlock new 'fake' storage. This will seem " +
      'legit to a 3rd party, but will secretly keep your main storage ' +
      'with coins safe.',
    help2: 'New storage will be fully functional, and you can store some ' + 'minimum amounts there so it looks more believable.',
    create_fake_storage: 'Create fake encrypted storage',
    go_back: 'Go Back',
    create_password: 'Create a password',
    create_password_explanation: 'Password for fake storage should not match password for your main storage',
    password_should_not_match: 'Password for fake storage should not match password for your main storage',
    retype_password: 'Retype password',
    passwords_do_not_match: 'Passwords do not match, try again',
    success: 'Success',
  },
  lnd: {
    title: 'manage funds',
    choose_source_wallet: 'Choose a source wallet',
    refill_lnd_balance: 'Refill Lightning wallet balance',
    refill: 'Refill',
    withdraw: 'Withdraw',
  },
};
