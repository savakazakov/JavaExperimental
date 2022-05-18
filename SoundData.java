public class SoundData
{
    public static final int SOUND_DATA_LENGTH = 32;

    public int[] samples;

    public SoundData(int[] samples)
    {
        this.samples = samples;
    }

    public int[] getSamples()
    {
        return samples;
    }
}