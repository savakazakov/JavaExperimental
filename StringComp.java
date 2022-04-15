public class StringComp
{
    public static void main(String[] args)
    {
        String s1 = "String!";
        String s2 = "String!";
        String s3 = new String("String!");
        if(s1 == s2)
            System.out.println("True");
        else
            System.out.println("False");

        if(s1 == s3)
            System.out.println("True");
        else
            System.out.println("False");

        if(s1.equals(s3))
            System.out.println("True");
        else
            System.out.println("False");
    }
}
