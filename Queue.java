public class Queue<T>
{
    // Here generics are used to make sure the containers, i.e. the Node
    // is the same type as the data it holds.
    // These are also object references which constantly change. They are used to 
    // hold the particular objects of interes namely the start and the end of the queue.
    Node<T> start;
    Node<T> end;

    public Queue()
    {
        start = null;
        end = null;
    }

    // Again generic type is used for the actual data to be stored in the queue.
    public void add(T item)
    {
        Node<T> n = new Node<>(item);

        // No items.
        if(end == null)
        {
            start = n;
            end = n;
        }
        else
        {
            end.next = n;
            // Again the object reference used has to be updated
            // in order to point to the right object.
            end = n;
        }
    }

    // Here generic type is used for the return type.
    public T remove()
    {
        if(start == null)
            return null;
        else
        {
            T toReturn = start.item;

            if(start == end)
            {
                start = null;
                end = null;
            }
            else
                start = start.next;
            
            return toReturn;
        }
    }
    public boolean contains(T item)
    {
        // A nice example of object references...
        // A current node to keep track of the current Node,
        // while the queue is being traversed.
        Node<T> current = start;
        while(current != null)
        {
            if(current.item.equals(item))
            {
                return true;
            }
            // Object refere update.
            current = current.next;
        }

        return false;
    }

    // Private inner class.
    private class Node<S>
    {
        private S item;
        private Node<S> next;
        
        public Node(S data)
        {
            item = data;
            next = null;
        }
    }
}

