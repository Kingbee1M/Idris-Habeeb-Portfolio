export type UtilitySoundName = "open" | "hover" | "select";

let sharedAudioContext: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === "undefined" || !("AudioContext" in window)) return null;

  sharedAudioContext ??= new window.AudioContext();

  if (sharedAudioContext.state === "suspended") {
    void sharedAudioContext.resume();
  }

  return sharedAudioContext;
}

export function playUtilitySound(name: UtilitySoundName, variation = 0) {
  const context = getAudioContext();
  if (!context) return;

  const now = context.currentTime;

  const sounds = {
    open: {
      frequencies: [392, 494, 587],
      spacing: 0.055,
      volume: 0.1,
      duration: 0.38,
    },
    hover: {
      frequencies: [587],
      spacing: 0,
      volume: 0.1,
      duration: 0.12,
    },
    select: {
      frequencies: [440, 554],
      spacing: 0.07,
      volume: 0.1,
      duration: 0.25,
    },
  };

  const sound = sounds[name];
  const pitchVariation = Math.pow(2, variation / 48);

  sound.frequencies.forEach((frequency, index) => {
    const start = now + index * sound.spacing;
    const duration = sound.duration;

    const oscillator = context.createOscillator();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      frequency * pitchVariation,
      start
    );

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1600, start);
    filter.Q.setValueAtTime(0.5, start);

    const volume = sound.volume / (name === "open" ? 1 + index * 0.35 : 1);

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);

    oscillator.start(start);
    oscillator.stop(start + duration + 0.01);
  });
}
