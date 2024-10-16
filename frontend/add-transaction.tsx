import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"

export default function AddTransaction({ onTransactionAdded }) {
  const [transactionType, setTransactionType] = useState('sale')
  const [amount, setAmount] = useState('')
  const [details, setDetails] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const endpoint = transactionType === 'sale' ? '/api/sales' : '/api/costs'
    const payload = {
      amount: parseFloat(amount),
      [transactionType === 'sale' ? 'product' : 'category']: details,
    }

    try {
      const response = await fetch(`http://localhost:5002${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Failed to add transaction')
      }

      const data = await response.json()
      toast({
        title: "Transaction added",
        description: `${transactionType === 'sale' ? 'Sale' : 'Cost'} of $${amount} has been recorded.`,
      })
      onTransactionAdded(data)
      setAmount('')
      setDetails('')
    } catch (error) {
      console.error('Error adding transaction:', error)
      toast({
        title: "Error",
        description: "Failed to add transaction. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <RadioGroup defaultValue="sale" onValueChange={setTransactionType}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sale" id="sale" />
          <Label htmlFor="sale">Sale</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="cost" id="cost" />
          <Label htmlFor="cost">Cost</Label>
        </div>
      </RadioGroup>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="details">{transactionType === 'sale' ? 'Product' : 'Category'}</Label>
        <Input
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder={transactionType === 'sale' ? 'Enter product name' : 'Enter cost category'}
          required
        />
      </div>
      <Button type="submit">Add Transaction</Button>
    </form>
  )
}