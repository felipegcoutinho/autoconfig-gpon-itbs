const VLAN_COUNT = 16;

const initialValues = {
  aimvlanpon: Array.from({length: VLAN_COUNT}, (_, i) => `${i + 1}`),
  vlanpon: Array.from({length: VLAN_COUNT}, (_, i) => `${200 + i}`),
  aimbridge: Array.from({length: VLAN_COUNT}, (_, i) => `${10 + i}`),
  aimrouter: Array.from({length: VLAN_COUNT}, (_, i) => `${50 + i}`),

  UPLINK: "ethernet 1/1",
  devicebridge: "i30-100",
  devicerouter: "i41-211",
  vmodovlan: "untagged",

  uplinkpon: Array.from({length: VLAN_COUNT}, () => "eth 1"),
  bridgepon: Array.from({length: VLAN_COUNT}, () => "uplink"),
  modovlanpon: Array.from({length: VLAN_COUNT}, () => "tagged"),

  R1Mode: "bridge",
  giMode: "bridge",
  defaultMode: "bridge",

  ponId: "1",
  ponSlot: "2",
  onuSn: "ITBS-12345678",
  onuDesc: "Cliente-X",
  ProfileDba: "Padrao",
  ProfileVlan: "1",
  ProfileLine: "2",
  VlanVlan: "100",
  dbaId: "1",
  dbaName: "Padrao",
  dbaCont: "4",
  dbaFix: "560000",
  dbaAssured: "10000",
  dbaMax: "1200000",
  onuEth: "1",
  vlanName: "PPPoE",
  lineName: "Dados",
};
