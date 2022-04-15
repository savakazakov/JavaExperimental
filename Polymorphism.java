public class Polymorphism
{
    public static void main(String[] args)
    {
        Polymorphism poly = new Polymorphism();
        Person p = poly.new Person(15, "Ben");
        p.method();
        Student s  = poly.new Student(16, "Jon", 1234);
        s.method();
        Person p1;
        p1 = s;
        p1.method();
        if(p1 instanceof Student)
        {
            System.out.println("Yes");
            Student s1 = (Polymorphism.Student) p1;
            s1.method();
        }

        ToImplementInterfaces t = poly.new ToImplementInterfaces();
        t.sameName2("name");

        // Person p2 = poly.new Student(17, "Cindy", 9876);
        // p2.method();
        // System.out.println(p2.getClass().getMethods()[0]);
        
        // p2.getClass().getSimpleName()
        // System.out.println(p1.sID);
    }

    public class Person
    {
        public int age;
        public String name;

        public Person(int age, String name)
        {
            this.age = age;
            this.name = name;
        }

        private void method()
        {
            System.out.println("Print Person: " + name + " and age " + age);
            System.out.println("This is private ^");
        }
    }

    public class Student extends Person
    {
        public int sID;

        public Student(int age, String name, int sID)
        {
            super(age, name);
            this.sID = sID;
        }
        
        public void method()
        {
            // super.method();
            System.out.println("sID: " + sID);
        }
    }

    public interface Testing1
    {
        public void sameName(String name);
    }

    public interface Testing2 extends Testing1
    {
        public void sameName2(String name);
    }

    public class ToImplementInterfaces implements Testing2
    {
        int test;

        @Override
        public void sameName(String name)
        {
            System.out.println("same name implementation");
        }

        @Override
        public void sameName2(String name)
        {
            System.out.println("same name implementation 2");
        }
    }
}