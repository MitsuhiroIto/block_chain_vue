pragma solidity ^0.4.17;

contract Contract {
  
  // public宣言することで外部から参照可能に
  // Contract owner
  address public owner;
  
  // 発電量とスイッチパラメーター、
  uint public power;
  uint public switch_para;

  // 送金量と送金先のアドレス
  address public transfer_address;
  mapping(address => uint) deposit_amounts;
  
  // コントラクトが作成された時にだけ実行されるコンストラクタ
  // コントラクトの作成者のアドレスを通貨発行可能なアドレスとして登録
  function Contract() public {
    owner = msg.sender;
  }

  // 発電量等のストア、また発電量に応じてスイッチパラメーターの変更や送金を行うコンストラクタ
  function set(uint new_power, address _transfer_address, uint _switch_para) public payable{  
    // 発電量をストア
    power = new_power; 

    // 発電量が一定以下の場合は送金先のアドレスと送金量をストアし、送金
    // 一旦コントラクトにdepositしてから、送金先のアドレスからwithdrawする
    transfer_address = _transfer_address;
    deposit_amounts[transfer_address] += msg.value; 
    withdraw(transfer_address);
    switch_para = _switch_para;    
  }

    // コントラクトに送金したEtherを指定アドレスに送金する
    function withdraw(address _transfer_address) public payable returns (address, uint, uint, uint, uint, address) {
        // セキュリティ上コントラクトに預けているEtherを0にしてから送金する
        uint transfer_amounts = deposit_amounts[_transfer_address];
        deposit_amounts[_transfer_address] = 0;
        _transfer_address.transfer(transfer_amounts);       
    }

  function get() view public returns (address, uint, uint, address) {
    return (owner, power, switch_para, transfer_address);
  }
}
