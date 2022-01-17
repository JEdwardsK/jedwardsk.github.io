import React from 'react'

const ControllersTab = () => {
  return (
    <div>
      <div>
        <h4>Change Controller Grip/Order</h4>
      </div>
      <div>
        <h4>Change Button Mapping</h4>
      </div>
      <div>
        <small>Allows you to change the button mapping for each controller. You can save frequently used mappings as presets which can be loaded later.</small>
      </div>
      <div>
        <h4>Controller Vibration</h4>
        <p>Off</p>
      </div>
      <div>
        <small>{'While playing, the vibration feature will be enabled for controllers that support it. Vibration for alarm notifications can be changed from Notifications => Alam Notification Settings.'}</small>
      </div>
      <div>
        <h4>Pro Controller Wired Communication</h4>
        <p>Off</p>
      </div>
      <div>
        <p>If this option is enabled, the Nintendo Switch Pro Controller will communicate with the console via wired communication when connect to it using the USB charging cable. TheNFC touchpoint on the Pro Controller will be disabled while the controller is using wired communication.</p>
      </div>
      <div>
        <h4>Update Controllers</h4>
        <small>Update connected controllers <br/> Some controlers cannot be updated.</small>
      </div>
      <div>
        <h4>Calibrate Control Sticks</h4>
      </div>
      <div>
        <h4>Calibrate Motion Controls</h4>
      </div>
      <div>

      </div>
      <div>
        <h4>Touch Screen Sensitivity</h4>
        <p>Standard</p>
      </div>
      <div>
        <small>{'The "Stylus" option increases the sensitivity of the touch screen to enhance stylus controls.'}</small>
      </div>
      <div>
        <h4>Test Input Devices</h4>
        <small>Check for problems in controlleres or the touch screen</small>
      </div>
      <div>
        <h4>Disconnect Controllers</h4>
      </div>
    </div>

  )
}

export default ControllersTab
