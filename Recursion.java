import java.util.Scanner;

public class Recursion
{
    public static void main(String[] args)
    {
        int a, b;
        Recursion r = new Recursion();
        try (Scanner scanner = new Scanner(System.in))
        {
            // Numerical input
            a = scanner.nextInt();
            b = scanner.nextInt();
        }

        System.out.println(r.multiply(a, b));
    }

    /**
     * A simple recursive method for multiplicaiton
     * @param a - first number
     * @param b - second number
     * @return a*b
     */
    public int multiply(int a, int b)
    {
        return b == 0 ? 0 : a + multiply(a, b-1);
    }
}