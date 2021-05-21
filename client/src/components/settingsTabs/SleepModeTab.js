import React from 'react'

const SleepModeTab = () => {
  return (
    <div>
      <div>
        <h4>Auto-Sleep (Playign on Console Screen)</h4>
        <div>10min</div>
      </div>
      <div>
        <h4>Auto-Sleep (Playing on TV Screen)</h4>
        <div>1hr</div>
      </div>
      <div>
        <h4>Disable uto-Sleep While Playing Media Content</h4>
        <div>Off</div>
      </div>
      <div>
        <small>If this option is turned off, auto sleep will activate after four hours of playback.</small>
      </div>
      <div>
        <h4>Wake When AC Adapter is Disconnected</h4>
        <div>On</div>
      </div>
      <div>
        <small>If this option is enabled, the console will also be woken from sleep mode when it is removed from the dock</small>
      </div>
    </div>
  )
}

export default SleepModeTab
