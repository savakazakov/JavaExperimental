public class Equality
{
    // Person's national Insurance Identifier. 
    private int ID;

    @Override
    public boolean equals (Object p)
    {
        return (this.ID == ((Equality)p).ID);
    }

    public static void main(String[] args)
    {
        Equality e = new Equality();
        Object o = new Object();
        
        e.equals(o);
    }
}
