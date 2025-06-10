// src/content/dill.js
export default {
    "1": {
      title: "Download Binary",
      command: "curl -O https://dill-release.s3.ap-southeast-1.amazonaws.com/linux/dill.tar.gz",
      hasCommand: true // Task ini memiliki perintah terminal
    },
    "2": {
      title: "Ekstrak dan Masuk ke Direktori",
      command: "tar -xzvf dill.tar.gz && cd dill",
      hasCommand: true // Task ini memiliki perintah terminal
    },
    "3": {
      title: "Generate Validator Mnemonic",
      command: "./dill_validators_gen new-mnemonic --num_validators=1 --chain=andes --folder=./",
      hasCommand: true // Task ini memiliki perintah terminal
    },
    "4": {
      description: `
        |1| Pilih bahasa English 2x saat diminta.
        |2| Buat kata sandi.
        |3| Simpan mnemonic phrase.
        |4| Masukkan mnemonic phrase.
      `,
      hasCommand: false // Task ini TIDAK memiliki perintah terminal
    },
    "5": {
      command: "./validator_keys",
      hasCommand: true // Task ini memiliki perintah terminal
    },
    "6": {
      command: "./dill-node accounts import --andes --wallet-dir ./keystore --keys-dir validator_keys/ --accept-terms-of-use",
      hasCommand: true // Task ini memiliki perintah terminal
    },
    "7": {
      command: "echo <my-password> > walletPw.txt",
      hasCommand: true // Task ini memiliki perintah terminal
    },
    "8": {
      description: `My-Password Ganti Dengan Password Kalian`,
      hasCommand: false // Task ini TIDAK memiliki perintah terminal
    },
    "9": {
      title: "Start Light Node",
      command: "./start_light.sh -p walletPw.txt",
      hasCommand: true // Task ini memiliki perintah terminal
    },
    "10": {
      title: "Check Logs Node",
      command: "ps -ef | grep dill",
      hasCommand: true // Task ini memiliki perintah terminal
    },
    "11": {
      title: "Backup Wallet Json",
      command: "~/dill$ cat ./validator_keys/deposit_data-xxxx.json",
      hasCommand: true // Task ini memiliki perintah terminal
    },
    "12": {
      title: "Claim Faucet on Discord",
      description: `
        |1| Discord : https://discord.com/invite/dill
        |2| Visit : https://staking.dill.xyz/
        |3| Connect EVM Wallet Metamask
        |4| Import Your Data Validator Keys Json ~/dill$ cat ./validator_keys/deposit_data-xxxx.json
        |5| Send Deposit and Approve Metamask
        |6| Done
      `,
      hasCommand: false // Task ini TIDAK memiliki perintah terminal
    },
    "13": {
    title: "Check Your Node",
      description: `Paste Your Publickey : https://andes.dill.xyz/validators`,
      hasCommand: false // Task ini TIDAK memiliki perintah terminal
    }
};




